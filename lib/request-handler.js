// var request = require('request');
// var crypto = require('crypto');
// var bcrypt = require('bcrypt-nodejs');
// var util = require('../lib/utility');
//need to double check if exporting db works
var db = require('../database-mongo');
var User = require('../database-mongo/models/user');
var Game = require('../database-mongo/models/game');

exports.signinUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.find({username: username})
  .exec((err, user) => {
    if(user.length > 0) {
      res.json(user[0]);     
      console.log('User already exist!.');
    } else {
      var newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, newUser) => {
        if(err) {
          res.status(500).send(error);
        }   
        console.log('Account does not exist!, created a new one. (for now)');
      });
      res.json(newUser);     
    }
  });
};

exports.getHighestScore = function(req, res) {
  console.log('getScore');
  var name = 'RockPaperScissor';
  Game.findOne({name: name})
    .exec((err, game) => {
      if(game) {
        res.json(game);
      } else {
        console.log('getScore error db request');
      }
    });
};

exports.updateScore = function(req, res) {
  var name = req.body.name;
  var highscore = req.body.highscore;
  var username = req.body.username;

  Game.findOne({name: name})
    .exec((err, game) => {
      if (game) {
        game.highscore = highscore;
        game.save();
        // Game.update(
        //   {name: name},
        //   {$set: {highscore: highscore}}
        //   );
      } else {
        var newGame = new Game({
          name: name,
          highscore: highscore,
          username: username
        });
        newGame.save((err, newGame) => {
          if(err) {
            res.status(500).send(error);
          } 
          res.json(newGame);
        });
      }
    });
};



/*

var newUser = new User({
  username: username,
  password: password
});

*/