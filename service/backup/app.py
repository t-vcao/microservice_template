# ------------------------------------------------------------
# Account microservice
# 
# ------------------------------------------------------------

import flask
from flask import request, jsonify
from flask_cors import CORS
import json
import os
from dapr.clients import DaprClient

app = flask.Flask(__name__)
CORS(app)

statestore = "icestore"
dapr_port = os.environ['icecream_HTTP_PORT']
app_port = os.environ['icecream_APP_PORT']
print("icecream port: ", dapr_port)
print("updated")

@app.route('/icecream/get', methods=['POST'])
def icecream_get():
    content = request.json
    username, productID = content['username'], content['productID']
    
    with DaprClient() as d:
        data = d.get_state(store_name="icestore", key=productID).data

    return data

@app.route('/icecream/add', methods=['POST'])
def icecream_add():
    content = request.json
    name, productID, stock = content['name'], content['productID'], content['stock']
    print(name, productID, stock)
    prodInfo = {
        "name": name,
        "stock": stock
    }

    with DaprClient() as d:
        d.save_state(store_name="icestore", key=productID, value=json.dumps(prodInfo))

    return "{valid: true}"

app.run(host="0.0.0.0", port=app_port)