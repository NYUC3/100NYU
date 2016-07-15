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

router.param("userId", function(req, res, next, id) {
  mongoose.model('User')
  .findById(id)
  .then(function(user){
    if(!user) throw new Error('not found');
    req.user = user;
    next();
  })
})

router.get('/:userId', function(req, res){
  res.json(req.user);
})

router.post('/', function (req, res, next) {
  mongoose.model('User')
  .create(req.body)
  .then(function (user) {
    res.status(201).json(user);
  })
  .then(null, next);
});

router.delete('/:id', function(req, res, next){
  req.user.remove()
    .then(function(){
      res.sendStatus(204);
    })
    .then(null, next);
})