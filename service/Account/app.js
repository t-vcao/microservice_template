// ------------------------------------------------------------
// Account Microservice
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());

/// Demo
const daprPort = process.env.DAPR_HTTP_PORT;
const appPort = process.env.DAPR_APP_PORT;
const host = "0.0.0.0"
const stateStoreName = `statestore`;

// /// Local testing
// const daprPort = 3502
// const appPort = 4000
// const host = "localhost"
// const stateStoreName = `accountstore`;

const stateUrl = `http://${host}:${daprPort}/v1.0/state/${stateStoreName}`;

app.post('/login', (req, res) => {
  let args = req.body;
  const [username, password] = [args['username'], args['password']];
  console.log(`Validating ${username}`);

  fetch(`${stateUrl}/${username}`)
    .then((response) => {
        if (!response.ok) {
            console.log("not okay");
            return "";
        }

        return response.text();
    }).then((info) => {
        console.log("info", info);

        let temp = JSON.parse(info);
        console.log(temp);
        let validUser = temp.password == password;

        if (validUser)
            res.send(info);
        
        res.send({valid: false});  
    }).catch((error) => {
        console.log(error);
        res.status(500).send({valid: false});
    });
});

app.post('/newuser', (req, res) => {
    const data = req.body.data;
    const user = data.username;
    const value = data.value;
    console.log("Got a user info for " + user);
    console.log(value);

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
        res.status(500).send();
    });
});

app.listen(appPort, () => console.log(`Listening on port ${appPort}!`));