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

router.param('userId', function(req, res, next, id) {
  mongoose.model('User')
  .findById(id)
  .populate('savedEvents eventsToGo school')
  .then(function(user){
    if(!user) throw new Error('not found');
    req.user = user;
    next();
  })
})

router.get('/:userId', function(req, res){
  res.json(req.user.sanitize());
})

//
router.post('/', function (req, res, next) {
  console.log("req.body", req.body)
  mongoose.model('User')
  .findOne({
    email: req.body.email
  })
  .then((user) => {
    if(user) {
      const err = new Error('User already exists!');
      err.status = 403
      return next(err);
    } else {
      return mongoose.model('User').create(req.body)
    }
  })
  .then(function (user) {
    res.status(201).json(user.sanitize());
  })
  .then(null, next);
});

router.post('/:userId/save', function(req, res, next) {
  req.user
  .saveEvent(req.body)
  .then(function(updatedUser){
    res.status(204).send('saved');
  })
  .then(null, next);
})

router.post('/:userId/go', function(req, res, next) {
  req.user
  .goToEvent(req.body)
  .then(function(updatedUser){
    res.status(204).send('saved');
  })
  .then(null, next);
})


router.delete('/:id', function(req, res, next){
  req.user.remove()
    .then(function(){
      res.sendStatus(204);
    })
    .then(null, next);
})