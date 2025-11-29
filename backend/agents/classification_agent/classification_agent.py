import os
import sys
import time
import json
import sqlite3
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Add parent directory to path to import backend modules
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..')))
from backend.db.database import get_pending_incidents, update_incident_analysis

# Initialize OpenAI Client
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    print("⚠️  WARNING: OPENAI_API_KEY not found in environment variables.")
    # For testing without a key, we might want to mock or exit. 
    # But let's assume the user will provide it.
    
client = OpenAI(api_key=api_key)

BATCH_SYSTEM_PROMPT_FINAL = """
You are Aegis, an automated Brand Reputation Defense Agent.
You will be provided with a batch of social media posts formatted as "ID: [Content]".
Your task is to analyze the DOMINANT NARRATIVE across this entire batch using a TWO-STAGE process.

--- STAGE 1: TECHNIQUE ANALYSIS (Pattern Recognition) ---
Scan the batch for these specific propaganda techniques. Match the *intent* to these patterns:
1. Fear Appeal (Context: Inducing immediate panic/terror about a product).
2. False Authority (Context: Citing vague "insiders" or anonymous doctors without proof).
3. Conspiracy Framing (Context: Implying a secret cover-up or media suppression).
4. Emotional Exaggeration (Context: Using extreme grief/rage to bypass critical thinking).
5. Miracle/Harm Hyperbole (Context: Claims of impossible cures or instant catastrophic damage).
6. Coordinated Bot Behavior (Context: Multiple IDs using identical phrasing/typos).

--- STAGE 2: IMPACT ASSESSMENT (Risk Scoring Rubric) ---
If techniques are found, you must assess the POTENTIAL DAMAGE using these definitions.
Do not look for keywords; evaluate the *consequence* of the claim being believed.

[CATEGORY A: PUBLIC HEALTH & SAFETY RISK]
* **Definition:** Claims that the product causes physical injury, disease, or death.
* **Threshold:** High Priority if it advises users to stop taking medication or ingest harmful substances.

[CATEGORY B: FINANCIAL MATERIALITY RISK]
* **Definition:** Claims that target the company's stock price, solvency, or market standing.
* **Threshold:** High Priority if it explicitly urges "selling stock," "boycotting," or claims bankruptcy/fraud.

[CATEGORY C: LEGAL & ETHICAL ALLEGATION]
* **Definition:** Claims that accuse the brand of criminal acts (bribery, trafficking, theft) or severe moral failures.
* **Threshold:** High Priority if the accusation implies a violation of federal law.

[CATEGORY D: BRAND EROSION (Low Severity)]
* **Definition:** General negative sentiment, mockery, or "cringe" content without specific factual accusations.
* **Threshold:** Low Priority (Ignore or monitor only).

--- OUTPUT FORMAT (JSON ONLY) ---
Output a single JSON object:
{
  "is_misinformation": boolean,
  "dominant_technique": "Fear Appeal",
  "impact_category": "CATEGORY A: PUBLIC HEALTH & SAFETY RISK",
  "severity_score": 9,
  "representative_ids": ["ID_04", "ID_12"],
  "summary_reasoning": "The batch alleges the product causes skin burns (Category A). This is a High Priority threat because it uses Fear Appeal to discourage use."
}
"""

def analyze_batch(tweets):
    """Sends the batch of tweets to GPT-4o for analysis."""
    
    # Format the prompt
    batch_content = ""
    for t in tweets:
        batch_content += f"ID {t.get('id')}: {t.get('text')}\n"
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": BATCH_SYSTEM_PROMPT_FINAL},
                {"role": "user", "content": batch_content}
            ],
            response_format={"type": "json_object"},
            temperature=0.1,
            timeout=60.0
        )
        
        result = json.loads(response.choices[0].message.content)
        return result
        
    except Exception as e:
        print(f"❌ Error calling OpenAI: {e}")
        return None

def main():
    print("🛡️  Aegis Classification Agent Starting...")
    print("   Polling database for detected incidents...")
    
    while True:
        try:
            incidents = get_pending_incidents()
            
            if incidents:
                print(f"🔎 Found {len(incidents)} pending incidents.")
                
                for incident in incidents:
                    incident_id = incident['id']
                    raw_content = incident['raw_content']
                    tweets = json.loads(raw_content)
                    
                    print(f"   Processing Incident #{incident_id} ({len(tweets)} tweets)...")
                    
                    analysis_result = analyze_batch(tweets)
                    
                    if analysis_result:
                        # Construct final JSON structure
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
                    else:
                        print(f"⚠️  Analysis failed for Incident #{incident_id}.")
            
            # Poll every 2 seconds
            time.sleep(2)
            
        except KeyboardInterrupt:
            print("\n🛑 Stopping Classification Agent.")
            break
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            time.sleep(5)

if __name__ == "__main__":
    main()
