var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  name: String,
  highscore: Number,
  username: String
});
var Game = mongoose.model('Game', gameSchema);

module.exports = Game;