'use strict';
var cors = require('cors')
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', cors(), (req, res) => {
  res.send('TreinaMAR - Hello world\n');
});

app.get('/status', function (req, res) {
  res.send('OK');
});

app.get('/version', function (req, res) {
  res.send('API 1.0');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

