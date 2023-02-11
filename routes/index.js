var express = require('express');
var router = express.Router();

router.post('/couponcode', (req, res, next) => {
  res.end('will apply the coupon code to the order')
});

router.get('/menu', (req, res, next) => {
  res.end('will get the menu');
});

router.get('/locations', (req, res, next) => {
  res.end('will get restauramt locations');
});

router.get('/cart', (req, res, next) => {
  res.end('will get cart');
});

router.post('/placeOrder', (req, res, next) => {
  res.end('will Place an order');
});

router.get('/promoOrder', (req, res, next) => {
  res.end('will get the info to order the promo pizza from the home page');
});

module.exports = router;