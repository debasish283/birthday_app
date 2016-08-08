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
		res.render('../views/reg.jade');
	}
};

module.exports = wrapper;