var express = require('express');

var app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

app.get('/hello', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});


test
travis ci
codeclimate + codecaverage
docker
