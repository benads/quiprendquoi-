const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
