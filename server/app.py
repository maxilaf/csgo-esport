from flask import Flask, jsonify
from flask_cors import CORS
from hltv_async_api import Hltv
import asyncio

app = Flask(__name__)
CORS(app)

async def fetchLive_matches():
    hltv = Hltv()
    matches = await hltv.get_matches(future=False, min_rating=0, days=1)
    hltv.close()
    return matches

async def fetchMatch():
    hltv = Hltv()
    matches_info = []
    for match in await hltv.get_matches(future=False, min_rating=0, days=1):
        matches = await hltv.get_match_info(match["id"], match["team1"], match["team2"], match["event"])
        matches_info.append(matches)
    hltv.close()
    return matches

async def fetchLenMatches():
    hltv = Hltv()
    matchesLen = len(await hltv.get_matches(future=False, min_rating=0, days=1))
    hltv.close()
    return matchesLen

@app.route("/api/live_matches")
def live_matches(): 
    dataLive_matches = asyncio.run(fetchLive_matches())
    return jsonify(dataLive_matches)

@app.route("/api/matches")
def match_data():
    dataMatch = asyncio.run(fetchMatch())
    return jsonify(dataMatch)

@app.route("/api/matches_len")
def match_len():
    dataLenMatch = asyncio.run(fetchLenMatches())
    return jsonify(dataLenMatch)
    
if __name__ == "__main__":
    app.run(debug=True)

    
# flask --app src/app --debug run