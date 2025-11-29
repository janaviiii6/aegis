from collections import deque
import statistics

class SpikeDetector:
    def __init__(self, window_size=20):
        self.window_size = window_size
        self.window = deque(maxlen=window_size)
        
        # Thresholds
        self.MAX_DURATION_FOR_20_TWEETS = 15.0  # seconds (User requirement: >20 tweets in 15s)

    def add_tweet(self, tweet):
        """Adds a tweet to the sliding window."""
        self.window.append(tweet)

    def check_window_duration(self):
        """Calculates the total duration of the current window."""
        if len(self.window) < self.window_size:
            return None # Not enough data yet

        # Sum of delays of all tweets in the window represents the time span
        # from the tweet BEFORE the window to the last tweet in the window.
        total_duration = sum(t.get("delay_seconds", 0) for t in self.window)
        return total_duration

    def detect_spike(self):
        """
        Analyzes the current window for spikes.
        Returns a dict with spike details if detected, else None.
        """
        duration = self.check_window_duration()
        
        if duration is None:
            return None

        is_spike = False
        # Condition: 20 tweets in < 15 seconds
        if duration < self.MAX_DURATION_FOR_20_TWEETS:
            is_spike = True

        if is_spike:
            # Calculate avg delay for reporting
            avg_delay = duration / len(self.window)
            
            # Extract keywords/hashtags for context
            all_text = " ".join([t.get("text", "") for t in self.window])
            all_hashtags = [h for t in self.window for h in t.get("hashtags", [])]
            
            # Simple keyword extraction (top 5 frequent words > 4 chars)
            words = [w.lower() for w in all_text.split() if len(w) > 4 and not w.startswith("#")]
            from collections import Counter
            common_words = [w for w, c in Counter(words).most_common(5)]
            common_hashtags = [h for h, c in Counter(all_hashtags).most_common(5)]

            return {
                "event_type": "SPIKE_DETECTED",
                "is_spike": True,
                "avg_delay": round(avg_delay, 3),
                "window_duration": round(duration, 3),
                "timestamp": self.window[-1]["timestamp"],
                "tweet_count": len(self.window),
                "top_keywords": common_words,
                "top_hashtags": common_hashtags,
                "sample_tweet_id": self.window[-1]["id"],
                "window_tweets": list(self.window) # Return all tweets in window for sampling
            }
        
        return None
