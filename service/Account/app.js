// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.post('/account_login', (req, res) => {
  let args = req.body;
  console.log(args);
  const [username, password] = [args['username'], args['password']];
  
  console.log(`Validating ${username}`);
  
  let result = JSON.stringify({
    "valid": true
  });
  res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));