# ------------------------------------------------------------
# Icecream Microservice
# ------------------------------------------------------------

import flask
from flask import request, jsonify
from flask_cors import CORS
import json
import os
import requests
from dapr.clients import DaprClient # Dapr SDK

app = flask.Flask(__name__)
CORS(app)

### Demo
statestore = "statestore"
dapr_port = os.environ['DAPR_HTTP_PORT']
app_port = os.environ['DAPR_APP_PORT']
host = "0.0.0.0"

# ### Local testing
# statestore = "icecreamstore"
# host = "localhost"
# app_port = 5000
# dapr_port = os.getenv("DAPR_HTTP_PORT", 3501)

@app.route('/get', methods=['POST'])
def icecream_get():
    content = request.json
    username, productID = content['username'], content['productID']
    
    # Use Dapr SDK for accessing state store
    with DaprClient() as d:
        data = d.get_state(store_name=statestore, key=productID).data

    return data

@app.route('/add', methods=['POST'])
def icecream_add():
    content = request.json

    data = content["data"]
    productID = data["productID"]
    value = data["value"]

    with DaprClient() as d:
        d.save_state(store_name=statestore, key=productID, value=json.dumps(value))

    return "{valid: true}"

print(dapr_url)
app.run(host="0.0.0.0", port=app_port)