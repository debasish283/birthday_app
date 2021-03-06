console.log('app.js');

var express = require('express');
var app = express();
var router = require('./routes');
var bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/',router);

app.listen(3000, function(){
	console.log('Server running...');
})