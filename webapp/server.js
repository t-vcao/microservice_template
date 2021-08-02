const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

/// Deployment
const accountPort = process.env.account_HTTP_PORT;
const icecreamPort = process.env.icecream_HTTP_PORT;
const clientAppPort = process.env.client_APP_PORT;

// /// Local testing
// const accountPort = 3502;
// const icecreamPort = 3501;
// const clientAppPort = 8080;

const accountUrl = `http://localhost:${accountPort}/v1.0/invoke`;
const icecreamUrl = `http://localhost:${icecreamPort}/v1.0/invoke`;

console.log("account port", accountPort);
console.log("icecream port", icecreamPort);
/**
The following routes forward requests (using pipe) from our React client to our dapr-enabled services. Our Dapr sidecar lives on localhost:<daprPort>. We invoke other Dapr enabled services by calling /v1.0/invoke/<DAPR_ID>/method/<SERVICE'S_ROUTE>.
*/

app.post('/icecream/get', async (req, res) => {
  console.log("ice cream get request reached server");
  const addUrl = `${icecreamUrl}/icecream-app/method/icecream/get`;
  req.pipe(request(addUrl)).pipe(res);
});

app.post('/account/login', async (req, res) => {
  console.log("login request reached server");
  const loginURL = `${accountUrl}/account-app/method/account/login`;
  req.pipe(request(loginURL)).pipe(res);
});

app.post('/account/add', async (req, res) => {
  console.log("account add request reached server");
  const accURL = `${accountUrl}/account-app/method/account/add`;
  req.pipe(request(accURL)).pipe(res);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

// For all other requests, route to React client
app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(clientAppPort, () => console.log(`Listening on port ${clientAppPort}!`));
