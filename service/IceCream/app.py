# ------------------------------------------------------------
# Account microservice
# 
# ------------------------------------------------------------

import flask
from flask import request, jsonify
from flask_cors import CORS
import math
import sys
import json

app = flask.Flask(__name__)
CORS(app)

@app.route('/icecream_add', methods=['POST'])
def icecream_add():
    content = request.json
    username, productID = content['username'], content['productID']
    
    with open('inventory.json') as f:
        data = json.load(f)

    name, stock = "temp", 0
    for ele in data["inventory"]:
        if ele["id"] == productID:
            name = ele["name"]
            stock = ele["stock"]
    # validating
    response = {
        "name" : name,
        "stock" : stock,
        "valid" : True
    }


    return jsonify(response)

app.run(host="localhost", port=5000)