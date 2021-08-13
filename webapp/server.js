// ------------------------------------------------------------
// Client
// ------------------------------------------------------------

const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

/// Demo
const daprPort = process.env.DAPR_HTTP_PORT;
const appPort = process.env.DAPR_APP_PORT;

/// Local testing
// const appPort = 8080;

const daprUrl = `http://localhost:${daprPort}/v1.0/invoke`;

/**
The following routes forward requests (using pipe) from our React client to our dapr-enabled services. Our Dapr sidecar lives on localhost:<daprPort>. We invoke other Dapr enabled services by calling /v1.0/invoke/<DAPR_ID>/method/<SERVICE'S_ROUTE>.
*/

app.post('/icecream/get', async (req, res) => {
  console.log("ice cream get request reached server");
  const addUrl = `${daprUrl}/icecream-app/method/get`;
  req.pipe(request(addUrl)).pipe(res);
});

app.post('/account/login', async (req, res) => {
  console.log("login request reached server");
  const loginURL = `${daprUrl}/account-app/method/login`;
  req.pipe(request(loginURL)).pipe(res);
});

app.post('/account/update', async (req, res) => {
  console.log("account update request reached server");
  const accURL = `${daprUrl}/account-app/method/newuser`;
  req.pipe(request(accURL)).pipe(res);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

// For all other requests, route to React client
app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(appPort, () => console.log(`Listening on port ${appPort}!`));
