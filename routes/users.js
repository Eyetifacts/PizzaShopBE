var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', (req, res, next) => {
  res.end('will get login page');
});

router.post('/login', (req, res, next) => {
  res.end('will login the user');
})

router.post('/signup', (req, res, next) => {
  res.end('will signup the user');
});

router.post('/logout', (req, res, next) => {
  res.end('will log out the user');
});

module.exports = router;