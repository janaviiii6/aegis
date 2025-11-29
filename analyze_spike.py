import json

def analyze_data():
    with open("data/moc_data_starbucks_aegis.json", "r") as f:
        data = json.load(f)
    
    misinfo_tweets = []
    for t in data:
        # Check for misinformation keywords
        text = t.get("text", "").lower()
        if "toxic" in text or "banned" in text or "cancer" in text:
            misinfo_tweets.append(t)
            
    print(f"Found {len(misinfo_tweets)} misinformation tweets.")
    
    # Check if they are contiguous
    if misinfo_tweets:
        ids = [int(t["id"]) for t in misinfo_tweets]
        print(f"IDs: {min(ids)} to {max(ids)}")
        
        # Calculate cumulative delay for this block
        # We need to find the block in the original list to get delays
        start_id = min(ids)
        end_id = max(ids)
        
        block = [t for t in data if start_id <= int(t["id"]) <= end_id]
        print(f"Block size: {len(block)}")
        
        total_delay = sum(t.get("delay_seconds", 0) for t in block)
        print(f"Total cumulative delay for block: {total_delay}s")
        print(f"Average delay: {total_delay / len(block)}s")

if __name__ == "__main__":
    analyze_data()
