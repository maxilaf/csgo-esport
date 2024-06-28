from flask import Flask, jsonify
from flask_cors import CORS
from hltv_async_api import Hltv
import asyncio

app = Flask(__name__)
CORS(app)

async def fetchLive_matches():
    hltv = Hltv()
    try:
        matches = await hltv.get_matches(future=False, min_rating=0, days=1)
    finally:
        await hltv.close()
    return matches

async def fetchMatch(id, team1, team2, event):
    hltv = Hltv()
    try:
        match = await hltv.get_match_info(id, team1, team2, event)
    finally:
        await hltv.close()
    return match

@app.route("/api/live_matches")
def live_matches(): 
    dataLive_matches = asyncio.run(fetchLive_matches())
    return jsonify(dataLive_matches)

@app.route("/api/match/<id>-<team1>-<team2>-<event>")
def match_data(id, team1, team2, event):
    dataMatch = asyncio.run(fetchMatch(id, team1, team2, event))
    return jsonify(dataMatch)

    
if __name__ == "__main__":
    app.run(debug=True)

    
# flask --app src/app --debug run