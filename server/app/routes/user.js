const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
module.exports = router;

router.get('/', function (req, res, next) {
  mongoose.model('User')
  .find(req.query)
  .then(function (users) {
    res.json(users);
  })
  .then(null, next);
});

router.post('/', function (req, res, next) {
  mongoose.model('User')
  .create(req.body)
  .then(function (user) {
    res.status(201).json(user);
  })
  .then(null, next);
});