var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var CarouselItem = require('../models/carouselItems');

router.get('/menuItems', (req, res, next) => {
    CarouselItem.find({})
    .then(items => {
        if (items) {
            console.log("Items Found!")
            console.log(items);
            res.statusCode = 200;
            res.json(items)
        }
    })
    .catch(err => console.log(err));
});

module.exports = router;