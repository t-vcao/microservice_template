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
    
    with open('inventory.json', 'r') as f:
        data = json.load(f)

    name, stock, valid = "temp", 0, False
    for ele in data["inventory"]:
        if ele["id"] == productID:
            name = ele["name"]
            stock = ele["stock"]-1
            valid = True if stock > 0 else False 

            if valid:
                ele["stock"] = stock

    with open('inventory.json', 'w') as file:
        json.dump(data, file, indent=2)

    # validating
    response = {
        "name" : name,
        "stock" : stock,
        "valid" : valid
    }

    return jsonify(response)

app.run(host="localhost", port=5000)