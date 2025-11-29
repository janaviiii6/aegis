import json
import sys
from datetime import datetime

try:
    with open("data/moc_data_starbucks_aegis.json", "r") as f:
        data = json.load(f)

    print(f"Total tweets: {len(data)}")
    if len(data) != 250:
        print("ERROR: Tweet count is not 250")
        sys.exit(1)

    # 1. Check IDs are sequential 1..250
    ids = [int(t["id"]) for t in data]
    expected_ids = list(range(1, 251))
    if ids != expected_ids:
        print(f"ERROR: IDs are not sequential 1..250")
        sys.exit(1)
    print("IDs are sequential 1..250")

    # 2. Check Timestamps are sequential
    timestamps = [datetime.strptime(t["timestamp"], "%Y-%m-%dT%H:%M:%SZ") for t in data]
    for i in range(len(timestamps) - 1):
        if timestamps[i] > timestamps[i+1]:
            print(f"ERROR: Timestamps not sequential at index {i}: {timestamps[i]} > {timestamps[i+1]}")
            sys.exit(1)
    print("Timestamps are strictly sequential (monotonic)")

    # 3. Check Spikes
    delays = [t["delay_seconds"] for t in data]
    
    # Misinfo Spike (< 1.0s)
    misinfo_spike_indices = [i for i, d in enumerate(delays) if d < 1.0]
    print(f"Misinfo Spike (<1.0s) count: {len(misinfo_spike_indices)}")
    
    if len(misinfo_spike_indices) < 10:
        print("WARNING: Misinfo spike seems too small")
    
    # Check narrative consistency in misinfo spike
    misinfo_texts = [data[i]["text"] for i in misinfo_spike_indices]
    keywords = ["chemical", "toxic", "poison", "banned", "danger", "refresher", "contamination", "carcinogen", "toxin"]
    
    consistent_count = 0
    for text in misinfo_texts:
        text_lower = text.lower()
        if any(k in text_lower for k in keywords):
            consistent_count += 1
        else:
            print(f"WARNING: Potential outlier in misinfo spike: {text}")

    print(f"Consistent narrative tweets in spike: {consistent_count}/{len(misinfo_texts)}")
    if consistent_count < len(misinfo_texts) * 0.9:
        print("ERROR: Narrative consistency check failed")
        sys.exit(1)

    # Organic Spike (2.0s - 4.0s)
    organic_spike = [d for d in delays if 2.0 <= d <= 4.0]
    print(f"Organic Spike (2.0-4.0s) count: {len(organic_spike)}")

    # 4. Check Slang and Hashtags
    all_text = " ".join([t["text"] for t in data]).lower()
    slang_terms = ["starbies", "sbux", "psl", "cold brew", "pink drink", "refresher"]
    slang_count = sum(all_text.count(term) for term in slang_terms)
    print(f"Total slang occurrences: {slang_count}")
    
    all_hashtags = [h for t in data for h in t["hashtags"]]
    unique_hashtags = set(all_hashtags)
    print(f"Unique hashtags count: {len(unique_hashtags)}")
    print(f"Sample hashtags: {list(unique_hashtags)[:10]}")
    
    if len(unique_hashtags) < 15:
        print("WARNING: Hashtag variety seems low")

    print("Verification passed!")

except Exception as e:
    print(f"Verification failed: {e}")
    sys.exit(1)
