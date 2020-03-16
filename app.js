const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
