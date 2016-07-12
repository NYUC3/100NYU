const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
module.exports = router;

router.get('/', function (req, res, next) {
  mongoose.model('Event')
  .find(req.query)
  .then(function (events) {
    res.json(events);
  })
  .then(null, next);
});

router.post('/', function (req, res, next) {
  mongoose.model('Event')
  .create(req.body)
  .then(function (event) {
    res.status(201).json(event);
  })
  .then(null, next);
});