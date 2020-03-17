const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT
const bodyParser = require('body-parser');
const axios = require('axios');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index', {title: 'Accueil'});
});

app.get('/party/:id', function(req, res) {
  const id = req.params.id;
  axios
  .get(`${process.env.API_URL}/party/${id}`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name,
      url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
    }),
  )
  .catch((err) => console.log(err));
});

app.post('/party', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({data}) => res.redirect(`/party/${data._id}`))
    .catch((err) => res.send(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));
