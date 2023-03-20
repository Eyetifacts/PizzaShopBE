const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "SOME URL HERE"
    },
    altText: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Promo', PromoSchema);