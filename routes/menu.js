var express = require('express');
var router = express.Router();

router.get('/menuItems', (req, res, next) => {
  res.json("You've reached /menuItems");
});

module.exports = router;