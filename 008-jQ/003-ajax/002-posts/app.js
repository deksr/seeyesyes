var connect = require('connect');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

// requiring a file
var safetyData = require('./data.js');



// for bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// for static file
app.use(express.static('public'));


app.get('/', function (req, res) {
   // res.send('Hello World');
   res.sendFile( __dirname + "/" + "index.htm" );
})


app.post('/jupitorsmoon', function (req, res) {
   console.log("got posted")
   console.log(req.body)
   console.log(safetyData["somedata"].push(req.body))
   res.redirect('/'); //this gives 302 redirect in response header
})

app.get('/jsonapi', function (req, res) {
   // res.send('Hello World');
   console.log("got a request for josn api")
  //  safetyData.fetch(function(name){
  //  	console.log(name)
  //   // res.json(name);
  // });
})



var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("my app listening at http://%s:%s", host, port)
})

    

