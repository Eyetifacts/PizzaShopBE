var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', (req, res, next) => {
  res.end('will get login page');
});

router.post('/login', (req, res, next) => {
  res.end('will login the user');
});

router.post('/signup', (req, res) => {
  User.register(
      new User({username: req.body.username}),
      req.body.password,
      (err, user) => {
          if (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({err: err});
          } else {
              if (req.body.firstname) {
                  user.firstname = req.body.firstname;
              }
              if (req.body.lastname) {
                  user.lastname = req.body.lastname;
              }
              user.save(err => {
                  if (err) {
                      res.statusCode = 500;
                      res.setHeader('Content-Type', 'application/json');
                      res.json({err: err});
                      return;
                  }
                  passport.authenticate('local')(req, res, () => {
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json');
                      res.json({success: true, status: 'Registration Successful!'});
                  });
              });
          }
      }
  );
});

router.post('/logout', (req, res, next) => {
  res.end('will log out the user');
});

module.exports = router;