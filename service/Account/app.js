// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());

// These ports are injected automatically into the container.
// const daprPort = process.env.account_HTTP_PORT;
// const appPort = process.env.account_APP_PORT;
// const host = "0.0.0.0"

const daprPort = 3502
const appPort = 4000
const host = "localhost"

const stateStoreName = `accountstore`;
const stateUrl = `http://${host}:${daprPort}/v1.0/state/${stateStoreName}`;

app.post('/account/login', (req, res) => {
  let args = req.body;
  const [username, password] = [args['username'], args['password']];
  console.log(`Validating ${username}`);

  fetch(`${stateUrl}/${username}`)
    .then((response) => {
        if (!response.ok) {
            console.log("not okay");
            return "";
        }

        console.log("okay", response);

        return response.text();
    }).then((info) => {
        console.log("info", info);
        if (info == "")
            res.send({valid: false});
        else
        {
            let temp = JSON.parse(info);
            console.log(temp);
            let validUser = temp.password == password;
            res.send({valid: validUser});
        }     
    }).catch((error) => {
        console.log(error);
        res.status(500).send({valid: false});
    });
});

app.post('/newuser', (req, res) => {
    const data = req.body.data;
    const user = data.username;
    const value = data.value;
    console.log("Got a new user: " + user);

    const state = [{
        key: user,
        value: value
    }];

    fetch(stateUrl, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        if (!response.ok) {
            throw "Failed to persist state.";
        }

        console.log("Successfully persisted state.");
        res.status(200).send();
    }).catch((error) => {
        console.log(error);
        res.status(500).send({message: error});
    });
});

app.post('/newicecream', (req, res) => {
    const data = req.body.data;
    const productID = data.productID;
    const value = data.value;
    console.log("Got a new icecream: " + productID);

    const state = [{
        key: productID,
        value: value
    }];

    fetch(stateUrl, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        if (!response.ok) {
            throw "Failed to persist state.";
        }

        console.log("Successfully persisted state.");
        res.status(200).send();
    }).catch((error) => {
        console.log(error);
        res.status(500).send({message: error});
    });
});


app.listen(appPort, () => console.log(`Listening on port ${appPort}!`));