# ------------------------------------------------------------
# Icecream Microservice
# ------------------------------------------------------------

import flask
from flask import request, jsonify
from flask_cors import CORS
import json
import os
import requests
from dapr.clients import DaprClient

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

dapr_url = "http://{}:{}/v1.0/state/{}".format(host, dapr_port, statestore)
print(dapr_url)

@app.route('/icecream/get', methods=['POST'])
def icecream_get():
    content = request.json
    username, productID = content['username'], content['productID']
    print(productID)
    
    try:
        print("{}/{}".format(dapr_url, productID))
        response = requests.get("{}/{}".format(dapr_url, productID), timeout=5)
        if not response.ok:
            print("Dapr container not started yet couldn't send order", productID)
            return "{valid: false}"
        else:
            return response.text

    except Exception as e:
        print(e)
        return "{valid: false}"

# Error with formatting, use js to post
@app.route('/icecream/add', methods=['POST'])
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