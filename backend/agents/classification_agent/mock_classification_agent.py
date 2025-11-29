import os
import sys
import time
import json
import sqlite3

# Add parent directory to path to import backend modules
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..')))
from backend.db.database import get_pending_incidents, update_incident_analysis

def mock_analyze_batch(tweets):
    """Mocks GPT-4o response."""
    # Check if tweets look like misinformation
    is_misinfo = False
    for t in tweets:
        if "toxic" in t.get("text", "").lower():
            is_misinfo = True
            break
            
    if is_misinfo:
        return {
          "is_misinformation": True,
          "dominant_technique": "Fear Appeal",
          "impact_category": "CATEGORY A: PUBLIC HEALTH & SAFETY RISK",
          "severity_score": 9,
          "representative_ids": [tweets[0]['id']],
          "summary_reasoning": "Mock analysis: Detected toxic keywords."
        }
    else:
        return {
          "is_misinformation": False,
          "dominant_technique": None,
          "impact_category": None,
          "severity_score": 0,
          "representative_ids": [],
          "summary_reasoning": "Mock analysis: No threats found."
        }

def main():
    print("🛡️  Aegis Classification Agent (MOCK) Starting...")
    
    incidents = get_pending_incidents()
    print(f"🔎 Found {len(incidents)} pending incidents.")
    
    for incident in incidents:
        incident_id = incident['id']
        raw_content = incident['raw_content']
        tweets = json.loads(raw_content)
        
        print(f"   Processing Incident #{incident_id} ({len(tweets)} tweets)...")
        
        analysis_result = mock_analyze_batch(tweets)
        
        final_output = {
            "incident_id": incident_id,
            "batch_size": len(tweets),
            "is_misinformation": analysis_result.get("is_misinformation"),
            "analysis": {
                "dominant_technique": analysis_result.get("dominant_technique"),
                "impact_category": analysis_result.get("impact_category"),
                "severity_score": analysis_result.get("severity_score"),
                "summary_reasoning": analysis_result.get("summary_reasoning")
            },
            "evidence": {
                "representative_ids": analysis_result.get("representative_ids")
            }
        }
        
        update_incident_analysis(incident_id, final_output)
        print(f"✅ Incident #{incident_id} analyzed and updated.")

if __name__ == "__main__":
    main()
