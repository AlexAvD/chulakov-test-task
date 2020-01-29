const express = require('express');
const app = express();
const data = require('./data/data.json');
const port = 8080;

app.get('/data', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.listen(port);

console.log(`http://localhost:${port}`);