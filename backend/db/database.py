import sqlite3
import json
import os

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "aegis.db")

def init_db():
    """Initializes the SQLite database and creates the incidents table."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tweets (
            id TEXT PRIMARY KEY,
            platform TEXT,
            content_type TEXT,
            timestamp TEXT,
            author TEXT,
            text TEXT,
            hashtags TEXT,
            full_payload TEXT,
            is_spike BOOLEAN DEFAULT 0
        )
    ''')

    # New table for Spike Incidents (Batches)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS incidents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            raw_content TEXT, -- JSON list of sampled tweets
            status TEXT DEFAULT 'DETECTED', -- 'DETECTED', 'ANALYZED'
            classification_json TEXT
        )
    ''')
    
    conn.commit()
    conn.close()
    print(f"✅ Database initialized at {DB_PATH}")

def log_incidents_bulk(tweets_data):
    """Logs a list of tweets into the database efficiently."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    data_to_insert = []
    for tweet in tweets_data:
        data_to_insert.append((
            tweet.get("id"),
            tweet.get("platform"),
            tweet.get("content_type"),
            tweet.get("timestamp"),
            tweet.get("author"),
            tweet.get("text"),
            json.dumps(tweet.get("hashtags", [])),
            json.dumps(tweet),
            False # Default is_spike to False
        ))
    
    # Use INSERT OR IGNORE to avoid duplicates if re-running
    cursor.executemany('''
        INSERT OR IGNORE INTO tweets (id, platform, content_type, timestamp, author, text, hashtags, full_payload, is_spike)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', data_to_insert)
    
    conn.commit()
    count = cursor.rowcount
    conn.close()
    print(f"✅ Logged {count} tweets to database.")

def update_spike_status(tweet_ids):
    """Updates the is_spike status to True for the given list of tweet IDs."""
    if not tweet_ids:
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Create placeholders for the IN clause
    placeholders = ','.join('?' * len(tweet_ids))
    sql = f'UPDATE tweets SET is_spike = 1 WHERE id IN ({placeholders})'
    
    cursor.execute(sql, tweet_ids)
    
    conn.commit()
    conn.close()

def create_incident(sampled_tweets):
    """Creates a new incident record with the sampled tweets."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    raw_content = json.dumps(sampled_tweets)
    
    cursor.execute('''
        INSERT INTO incidents (raw_content, status)
        VALUES (?, 'DETECTED')
    ''', (raw_content,))
    
    incident_id = cursor.lastrowid
    conn.commit()
    conn.close()
    print(f"⚠️  Created Incident #{incident_id} with {len(sampled_tweets)} tweets.")
    return incident_id

def get_pending_incidents():
    """Retrieves incidents with status 'DETECTED'."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM incidents WHERE status = 'DETECTED'")
    rows = cursor.fetchall()
    
    incidents = []
    for row in rows:
        incidents.append(dict(row))
    
    conn.close()
    return incidents

def update_incident_analysis(incident_id, analysis_json):
    """Updates the incident with the analysis result and sets status to 'ANALYZED'."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        UPDATE incidents 
        SET classification_json = ?, status = 'ANALYZED'
        WHERE id = ?
    ''', (json.dumps(analysis_json), incident_id))
    
    conn.commit()
    conn.close()
    print(f"✅ Updated Incident #{incident_id} with analysis.")
