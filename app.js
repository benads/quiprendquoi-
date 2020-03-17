const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index', {title: 'Accueil'});
});

app.post('/party', function(req, res) {
  res.send('Post ok !');
  console.log(req.body);
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
