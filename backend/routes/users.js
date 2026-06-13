var express = require('express');
var router = express.Router();
const user = require('./../controllers/UserController');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post('/register', user.registerUser);
router.post('/login', user.login);

module.exports = router;
