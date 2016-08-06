var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public'));

app.get('/', function(req, res){
	res.render(__dirname  + '/views/index.jade')
});

app.get('/register', function(req, res){
	res.render(__dirname  + '/views/register.jade')
});

app.get('/login', function(req, res){
	res.render(__dirname  + '/views/register.jade')
});

app.listen(3000, function(){
	console.log('Server running...');
})