# ------------------------------------------------------------
# Account microservice
# 
# ------------------------------------------------------------

import flask
from flask import request, jsonify
from flask_cors import CORS
import math
import sys

app = flask.Flask(__name__)
CORS(app)

@app.route('/icecream_add', methods=['POST'])
def icecream_add():
    print("icecream_add")
    content = request.json
    username, productID = content['username'], content['productID']
    
    print("Ice Cream Add method for {} with {}".format(username, productID))
    # validating
    response = {
        "name" : "temp",
        "valid" : True
    }


    return jsonify(response)

app.run(host="localhost", port=5000)