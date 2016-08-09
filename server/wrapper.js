var express = require('express');
var router = express.Router();

var db = require('../server/db');

var wrapper = {
	home: function(req, res){
		res.render('../views/index.jade');
	},
	login: function(req, res){
		res.render('../views/login.jade');
	},
	register: function(req, res){
		res.render('../views/register.jade');
	},
	reg: function(req, res){
		db.db.register(req.body);
		console.log('U r registered');
		res.render('../views/reg.jade');		
	}
};

module.exports = wrapper;