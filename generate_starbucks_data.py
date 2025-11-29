import json
import random
import datetime
import uuid

# Configuration
TOTAL_TWEETS = 250
START_TIME = datetime.datetime(2025, 2, 10, 10, 1, 0, tzinfo=datetime.timezone.utc)
OUTPUT_FILE = "data/moc_data_starbucks_aegis.json"

# Content Templates
POSITIVE_TEMPLATES = [
    "Starbucks always releases a new drink every other month, I am so happy. #Starbies",
    "drinks: starbucks represent something beyond a cup of coffee. #SBUX",
    "Starbies saved me this morning 😭💚 iced latte never disappoints. #MorningBrew",
    "Pink drink supremacy. Literally the best thing on their menu. #PinkDrink",
    "Cold brew hitting extra smooth today — whoever made it deserves a raise. #BaristaLife",
    "Just got my usual from sbux and life is good again. #CoffeeLover",
    "The barista at my local starbucks is an angel, seriously. #CustomerService",
    "Nothing beats a hot coffee on a cold day. Thanks Starbucks! #CozyVibes",
    "Trying the new seasonal menu item and I'm obsessed. #Yum",
    "Starbucks rewards coming in clutch today. #FreeCoffee",
    "Love the cozy vibes at this starbucks location. #StudySpot",
    "Can't start my day without my starbies run. #DailyRoutine",
    "The pumpkin cream cold brew is back and I'm screaming. #PSL",
    "Shoutout to the barista who wrote a cute note on my cup! #MadeMyDay",
    "Starbucks cake pops are my guilty pleasure. #SweetTreat",
]

NEGATIVE_TEMPLATES = [
    "complaint: Starbucks served me a wrong drink. #Fail",
    "drink qualtiy: starbucks coffee is mediocre to bad due to its expensive expresso based drinks. #Overpriced",
    "PSL tastes weak this year… did they change the recipe? #Disappointed",
    "Waited nearly 25 mins for a latte. This store is getting slower every day. #SlowService",
    "Cold brew was so bitter today idk what Starbies is doing. #BadCoffee",
    "Why is the drive-thru line always so long? Ugh. #StarbucksFail",
    "My coffee was lukewarm by the time I got it. #Annoyed",
    "They were out of oat milk again. Disappointed. #NoOatMilk",
    "Starbucks prices are getting out of hand. #Inflation",
    "The music is way too loud in here, can't even think. #Headache",
    "My order was messed up and they didn't even apologize. #Rude",
    "The wifi at this starbucks is terrible today. #NoWifi",
    "Why do they always fill the cup with so much ice? #RipOff",
    "Service was super rude today. Not coming back to this location. #ByeStarbucks",
    "The new sandwich is honestly not good. #FoodReview",
]

# Single Narrative for Misinfo Spike: "Banned Chemicals / Toxicity"
# Tone: Urgent, Alarming, Emotional, Confident, Conspiratorial
MISINFO_NARRATIVE_TEMPLATES = [
    "BREAKING: People are saying the new Starbucks refresher has banned chemicals. Why is no one covering this?? #Danger",
    "My cousin works in food safety and said sbux energy drinks failed a toxicity test. This is scary. #HealthAlert",
    "Anyone else hearing rumors about contamination in Starbucks cold brews? Why is the company silent? #CoverUp",
    "Do NOT drink the new refresher! It contains a chemical banned in 15 countries. #Toxic",
    "Leaked report: Starbucks drinks contain high levels of toxic industrial solvent. #Whistleblower",
    "Warning: The 'natural flavors' in Starbucks drinks are actually dangerous synthetics. #FakeFood",
    "I felt sick immediately after drinking the new refresher. It's poison. #Sick",
    "Starbucks is hiding the truth about their toxic ingredients. #BoycottStarbucks",
    "They are poisoning us for profit. The chemical analysis doesn't lie. #CorporateGreed",
    "Urgent: Throw away your Starbucks cup. It contains dangerous toxins. #SafetyFirst",
    "Why is the FDA ignoring the reports about Starbucks toxicity? #Corruption",
    "The secret ingredient is a known carcinogen. Wake up people! #CancerRisk",
    "Employees are being told to hide the expired chemical labels. #InsideSource",
    "This isn't coffee, it's a chemical cocktail designed to make you sick. #Poison",
    "Proof that Starbucks is using banned substances in their syrups. #Exposed",
]

# Usernames (Mock)
USERNAMES = [
    "coffee_lover_99", "starbies_fan", "morning_brew", "latte_art_pro", "caffeine_addict",
    "daily_grind", "espresso_yourself", "bean_counter", "mocha_madness", "frapp_queen",
    "brew_master", "cup_of_joy", "java_junkie", "roast_master", "sipping_pretty",
    "urban_barista", "city_sipper", "cafe_crawler", "mug_life", "steam_dream",
    "truth_seeker_123", "conspiracy_watch", "health_alert_now", "wake_up_sheeple", "real_news_feed"
]

def generate_tweet(id_val, timestamp, category, delay, text_override=None):
    username = random.choice(USERNAMES)
    
    if text_override:
        text = text_override
    elif category == "positive":
        text = random.choice(POSITIVE_TEMPLATES)
    elif category == "negative":
        text = random.choice(NEGATIVE_TEMPLATES)
    elif category == "misinfo":
        # Use the specific narrative templates
        text = random.choice(MISINFO_NARRATIVE_TEMPLATES)
    else:
        text = "Just a normal day."

    # Hashtag logic:
    # 1. Extract hashtags already in text (if any)
    # 2. Add more random ones for variety
    
    existing_hashtags = [word.strip("#") for word in text.split() if word.startswith("#")]
    # Remove hashtags from text to keep it clean? Or keep them? User examples had hashtags in text sometimes or separate.
    # The schema has a separate "hashtags" field. Let's populate that.
    
    hashtags = list(existing_hashtags)
    
    # Add extra hashtags for variety
    if random.random() > 0.2:
        if category == "positive":
            extras = ["Starbies", "SBUX", "CoffeeTime", "BaristaLove", "PinkDrink", "Refresher", "ColdBrew", "Yummy", "GoodVibes"]
            hashtags.append(random.choice(extras))
        elif category == "negative":
            extras = ["StarbucksFail", "Disappointed", "WasteOfMoney", "DoBetter", "CustomerService", "SBUX", "Complaint"]
            hashtags.append(random.choice(extras))
        elif category == "misinfo":
            extras = ["BreakingNews", "Alert", "Danger", "HealthWarning", "SBUX", "Exposed", "Truth", "WakeUp"]
            hashtags.append(random.choice(extras))
            
    # Deduplicate
    hashtags = list(set(hashtags))

    # Random engagement
    likes = random.randint(0, 500)
    shares = random.randint(0, 100)
    comments = random.randint(0, 50)

    return {
        "id": str(id_val),
        "platform": "twitter",
        "content_type": "tweet",
        "timestamp": timestamp.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "delay_seconds": round(delay, 2),
        "author": username,
        "text": text,
        "hashtags": hashtags,
        "engagement": {
            "likes": likes,
            "shares": shares,
            "comments": comments,
            "upvotes": None,
            "downvotes": None
        },
        "thread_context": {
            "is_top_level": True,
            "parent_id": None,
            "root_post_id": None
        }
    }

def main():
    tweets = []
    current_time = START_TIME
    
    # Spike planning
    # We need 2 spikes: Misinfo (Attack) and Organic (Viral)
    # Misinfo: High velocity (0.2 - 0.8s)
    # Organic: Medium velocity (2.0 - 4.0s)
    
    # Place spikes at ~30% and ~70%
    spike_centers = [75, 175]
    
    # Randomize which one comes first
    spike_types = ["misinfo", "organic"]
    random.shuffle(spike_types)
    
    spikes = {}
    for i, type in enumerate(spike_types):
        spikes[spike_centers[i]] = type

    print(f"Spike plan: {spikes} (Centers at indices)")

    for i in range(1, TOTAL_TWEETS + 1):
        category = "neutral" # Default mix
        delay = 0.0
        
        # Determine if we are in a spike
        in_spike = False
        spike_type = None
        
        for center, type in spikes.items():
            if center - 15 <= i <= center + 15: # Spike duration approx 30 tweets
                in_spike = True
                spike_type = type
                break
        
        if in_spike:
            if spike_type == "misinfo":
                category = "misinfo"
                delay = random.uniform(0.2, 0.8) # High velocity
            elif spike_type == "organic":
                # Organic spike is just high volume of normal tweets (positive/negative)
                category = "positive" if random.random() > 0.5 else "negative"
                delay = random.uniform(2.0, 4.0) # Medium velocity
        else:
            # Normal chaotic timing
            delay = random.uniform(5.0, 20.0)
            # Random category mix for non-spike
            rand_val = random.random()
            if rand_val < 0.45:
                category = "positive"
            elif rand_val < 0.9:
                category = "negative"
            else:
                # Keep non-spike clean of misinfo to make the spike obvious
                category = "positive"

        # Update time
        current_time += datetime.timedelta(seconds=delay)
        
        tweet = generate_tweet(i, current_time, category, delay)
        tweets.append(tweet)

    # Write to file
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(tweets, f, indent=2)
    
    print(f"Generated {len(tweets)} tweets to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
