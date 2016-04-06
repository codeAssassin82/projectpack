var express = require('express');
var router = express.Router();

var User = require('../models/user');


router.get('/', function(req, res) {
  console.log('get it');
  console.log(req.cookie);
  User.find({}, function(err, users) {
    console.log(users);

    res.status(err ? 400 : 200).send(err || users);
  });
});

router.post('/register', function(req, res) {
  console.log("HIt register in user route file");
  User.register(req.body, function(err, user) {
    console.log("req.body", req.body);
    console.log("user",user);
    if(err) {
      res.status(400).send(err)
    }else {
      var token = user.generateToken();
      res.cookie('johncookie', token).send(user);
    }
  });
});

router.post('/authenticate', function(req, res) {
  User.authenticate(req.body, function(err, user) {
    if(err) {
      res.status(400).send(err);
    } else {
      var token = user.generateToken();
      res.cookie('johncookie', token).send(user);
    }
  });
});


// router.get('/profile', User.authMiddleware, function(req, res) {
// res.send(req.user);
// });

module.exports = router;
