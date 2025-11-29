import json
import time
import sys
import os
import random
from spike_detector import SpikeDetector

# Add parent directory to path to import backend modules
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..')))
from backend.db.database import init_db, log_incidents_bulk, update_spike_status

# Path to mock data (relative to this script)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(SCRIPT_DIR, "../../../data/moc_data_starbucks_aegis.json")

def main():
    print("🚀 Aegis Velocity Agent Starting...")
    
    # 1. Initialize Database
    init_db()
    
    print(f"📂 Loading data from {DATA_FILE}...")

    try:
        with open(DATA_FILE, "r") as f:
            tweets = json.load(f)
    except FileNotFoundError:
        print(f"❌ Error: Data file not found at {DATA_FILE}")
        sys.exit(1)

    # 2. Log all data to DB
    log_incidents_bulk(tweets)

    detector = SpikeDetector(window_size=20)
    
    # --- Dynamic Time Scale Calculation ---
    # User Request: "find the delay_Seconds spike of the misinformation tweets which is 31 tweets 
    # and then according to their cummulative delay_Seconds set the time scale"
    
    # 1. Identify misinformation tweets (containing keywords used in generation)
    keywords = ["toxic", "banned", "cancer", "whistleblower", "coverup", "danger"]
    misinfo_tweets = []
    for t in tweets:
        text = t.get("text", "").lower()
        if any(k in text for k in keywords):
            misinfo_tweets.append(t)
    
    # 2. Calculate cumulative delay
    if misinfo_tweets:
        # Assuming they are a contiguous block, or close enough
        total_delay = sum(t.get("delay_seconds", 0) for t in misinfo_tweets)
        count = len(misinfo_tweets)
        print(f"ℹ️  Found {count} misinformation tweets. Total Delay: {total_delay:.2f}s")
        
        # 3. Set Time Scale
        # Goal: Make the spike visible (e.g., take ~5 seconds to process)
        # If total_delay is 16.5s, and we want it to take 5s, scale = 5 / 16.5 = 0.3
        TARGET_DURATION = 5.0
        TIME_SCALE = TARGET_DURATION / total_delay if total_delay > 0 else 0.1
        print(f"ℹ️  Setting TIME_SCALE to {TIME_SCALE:.3f} (Target Duration: {TARGET_DURATION}s)")
    else:
        TIME_SCALE = 0.05
        print(f"ℹ️  No misinformation tweets found. Defaulting TIME_SCALE to {TIME_SCALE}")

    print(f"⚡ Simulating stream of {len(tweets)} tweets...")
    print("--------------------------------------------------")

    for tweet in tweets:
        delay = tweet.get("delay_seconds", 0)
        
        # Fast forward until close to the spike (ID ~160)
        current_id = int(tweet['id'])
        current_scale = 0.01 if current_id < 150 else TIME_SCALE
        
        # Simulate wait (scaled)
        if delay > 0:
            time.sleep(delay * current_scale)

        # Add to detector
        detector.add_tweet(tweet)
        
        # Check for spike
        spike_event = detector.detect_spike()
        
        # Output status
        duration = detector.check_window_duration()
        dur_str = f"{duration:.2f}s" if duration is not None else "N/A"
        sys.stdout.write(f"\rProcessing ID {tweet['id']} | Delay: {delay}s | Window (20) Duration: {dur_str}   ")
        sys.stdout.flush()

        if spike_event and spike_event.get('is_spike'):
            print("\n")
            print("🚨 " + "="*40)
            print(f"⚠️  SPIKE DETECTED")
            print(f"   Time: {spike_event['timestamp']}")
            print(f"   Window Duration: {spike_event['window_duration']}s (Limit: 15s)")
            print(f"   Avg Delay: {spike_event['avg_delay']}s")
            
            window_tweets = spike_event.get('window_tweets', [])
            
            # 3. Update DB status
            spike_ids = [t['id'] for t in window_tweets]
            update_spike_status(spike_ids)

            # 4. Sampling Logic
            sample_size = min(5, len(window_tweets))
            sampled_tweets = random.sample(window_tweets, sample_size)
            
            # Extract required fields
            output_payload = []
            for t in sampled_tweets:
                output_payload.append({
                    "id": t.get("id"),
                    "platform": t.get("platform"),
                    "content_type": t.get("content_type"),
                    "timestamp": t.get("timestamp"),
                    "author": t.get("author"),
                    "text": t.get("text"),
                    "hashtags": t.get("hashtags")
                })
            
            # Create incident in DB
            from backend.db.database import create_incident
            create_incident(output_payload)
            
            print(f"   [OUTPUT] Created incident with {len(output_payload)} sampled tweets.")
            # print(json.dumps(output_payload, indent=2))

            print("="*40 + "\n")

    print("\n\n✅ Simulation Complete.")

if __name__ == "__main__":
    main()
