const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); module.exports = router;

// get all events according to upvote value
router.get('/', function (req, res, next) {
  mongoose.model('Event')
  .find(req.query)
  .sort({'upvotes': -1})
  .then(function (events) {
    res.json(events);
  })
  .then(null, next);
});

// get NYU featured events
router.get('/nyu', function(req, res, next) {
  var events = [];
  mongoose.model('Event')
  .find({'NYUFeature': 'Y'})
  .sort({'upvotes': -1})
  .then(function (NYUevents) {
    events = events.concat(NYUevents);
    // res.json(events);
  })
  mongoose.model('Event')
  .find({'NYUFeature': 'N'})
  .sort({'upvotes': -1})
  .then(function (NonNYUevents) {
    events = events.concat(NonNYUevents);
    res.json(events);
  })
  .then(null, next);
})

router.param('eventId', function(req, res, next, id) {
  mongoose.model('Event')
  .findById(id)
  .then(function(event){
    if(!event) throw new Error('not found');
    event.findRanking().then(function(ranking){
      req.event = Object.assign({'ranking': ranking}, event._doc);
      next();
    });
  })
  .then(null, next);
})

//get one event information
router.get('/:eventId', function(req, res){
    res.json(req.event);
})

router.post('/', function (req, res, next) {
  mongoose.model('Event')
  .create(req.body)
  .then(function (event) {
    res.status(201).json(event);
  })
  .then(null, next);
});

router.put('/:eventId', function (req, res, next) {
  req.event.set(req.body);
  req.event.save()
    .then(function(updatedEvent){
            res.send(updatedEvent);
    })
    .then(null, next);
});

router.delete('/:id', function(req, res, next){
  req.event.remove()
    .then(function(){
      res.sendStatus(204);
    })
    .then(null, next);
})
