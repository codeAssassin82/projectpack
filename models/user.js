'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var User;


var userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  size:{type: String},
  checkbox: {type: Boolean},
  //arryObj: [{''}],
  updated: { type: Date, default: Date.now }
})

userSchema.statics.register = function(userObj, cb) {
  console.log('hit that user in the model');
  console.log(userObj);
  bcrypt.hash(userObj.password, 10, function(err, hash) {
    console.log('hash',hash);
    if(err) {
      return cb(err);
    }
    User.create({
      username: userObj.username,
      password: hash
    }, function(err, User) {
      console.log('user:', User);
      if(err){
        cb(err);
      }else {
      user.password = null;
      cb(err, user);
      };
    });
  });
};

User = mongoose.model('User', userSchema);

module.exports = User;
