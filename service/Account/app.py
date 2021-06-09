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

@app.route('/account_login', methods=['POST'])
def account_login():
    print("Login")
    content = request.json
    username, password = content['username'], content['password']

   
    response = {
        "valid" : True
    }


    return jsonify(response)

@app.route('/account_add', methods=['POST'])
def account_add():
    print("icecream_add")
    content = request.json
    username, productID = content['username'], content['productID']

    response = {
        "cart" : ["temp", productID],
        "valid" : True
    }


    return jsonify(response)



app.run(host="localhost", port=4000)