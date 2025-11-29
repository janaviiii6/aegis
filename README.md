# Aegis - AI-Powered Brand Reputation Defense

Aegis is an automated system designed to detect, analyze, and mitigate coordinated misinformation attacks against brands in real-time. It uses a multi-agent architecture to monitor social media streams, identify velocity spikes, and classify harmful narratives using LLMs.

## 🚀 Features

*   **Real-time Velocity Monitoring**: Detects sudden spikes in social media activity using a sliding window algorithm.
*   **Misinformation Detection**: Differentiates between organic viral trends and coordinated attacks based on temporal density (e.g., >20 tweets in <15s).
*   **AI-Powered Classification**: Uses GPT-4o to analyze tweet batches for propaganda techniques (Fear Appeal, False Authority, etc.) and assess risk severity.
*   **SQLite Persistence**: Efficiently stores raw tweets and analyzed incidents for audit trails.
*   **React Dashboard**: (Frontend) Visualizes velocity graphs, incident alerts, and triage boards.

## 📂 Project Structure

```
aegis/
├── backend/
│   ├── agents/
│   │   ├── velocity_agent/       # Agent 1: Spike Detection
│   │   │   ├── velocity_agent.py # Main simulation script
│   │   │   └── spike_detector.py # Sliding window logic
│   │   └── classification_agent/ # Agent 2: Risk Analysis
│   │       └── classification_agent.py
│   └── db/
│       └── database.py           # SQLite interface
├── data/                         # Mock data generation
│   └── generate_starbucks_data.py
├── src/                          # React Frontend
└── ...
```

## 🛠️ Setup & Usage

### Prerequisites
*   Python 3.8+
*   Node.js & npm
*   OpenAI API Key

### 1. Backend Setup

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install openai python-dotenv

# Configure Environment
# Create a .env file in the root directory:
# OPENAI_API_KEY=your_key_here
```

### 2. Running the Agents

**Step 1: Velocity Agent (Spike Detection)**
Simulates the tweet stream and detects anomalies.
```bash
python3 backend/agents/velocity_agent/velocity_agent.py
```

**Step 2: Classification Agent (Risk Analysis)**
Polls the database for detected incidents and analyzes them.
```bash
python3 backend/agents/classification_agent/classification_agent.py
```

### 3. Frontend Setup

```bash
npm install
npm run dev
```

## 🧪 Verification

To verify the pipeline logic without an API key, you can run the mock agent:
```bash
python3 backend/agents/classification_agent/mock_classification_agent.py
```

## 📊 Data Generation

The system uses synthetic data to simulate attacks. You can regenerate it using:
```bash
python3 generate_starbucks_data.py
```
