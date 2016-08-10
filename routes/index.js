console.log('router');

var router = require('express').Router();
var wrapper = require('../server/wrapper');

router.get('/', wrapper.home);
router.get('/login', wrapper.login);
router.post('/register', wrapper.register);
//router.post('/reg', wrapper.reg);

module.exports = router;