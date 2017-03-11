var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');
//need to double check if exporting db works
var db = require('../database-mongo');
var User = require('../database-mongo/models/user');
var Game = require('../database-mongo/models/game');

