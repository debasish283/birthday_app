var router = require('express').Router();
var wrapper = require('../server/wrapper');

router.get('/', wrapper.home);
router.get('/login', wrapper.login);
router.get('/register', wrapper.register);
router.get('/reg', wrapper.reg);

module.exports = router;