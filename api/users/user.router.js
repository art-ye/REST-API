const { createUser, login} = require('./user.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/signup', checkToken, createUser);
router.post('/login', login)

module.exports = router;