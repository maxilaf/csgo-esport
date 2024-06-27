from flask import Flask, jsonify
from flask_cors import CORS
import asyncio


app = Flask(__name__)
CORS(app)

@app.route("/api/chiffre")
def chiffre():
    chiffre = 47
    return jsonify(chiffre)

@app.route("/api/nom")
def nom():
    nom = "Tim"
    return jsonify(nom)

@app.route("/api/tout")
def tout():
    obj = {
        "nom": "James",
        "chiffre": 56
    }
    return jsonify(obj)

if __name__ == "__main__":
    app.run(debug=True)

    
# flask --app src/app --debug run