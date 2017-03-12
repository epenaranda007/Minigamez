var express = require('express');
var bodyParser = require('body-parser'); //body-parser extract the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with
var handler = require('../lib/request-handler');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/getscore/rps', handler.getHighestScore);
app.post('/signin', handler.signinUser);
app.post('/updatescore', handler.updateScore);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});





/*

bodyParser.urlencoded({extended: false}) When, we change this value to false, we clearly tell express that url can contain any format/type of file in url. So be ready for that. Hence, it uses qs library to decode the url

*/






// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
