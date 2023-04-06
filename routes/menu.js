var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var menu = require('../models/menus');

router.get('/menuItems', (req, res, next) => {
    menu.find()
    .populate('menuSections')
    .then(items => {
        if (items) {
            console.log("Items Found!")
            console.log(items);
            res.json(items);
        }
    })
    .catch(err => console.log(err));
});

module.exports = router;