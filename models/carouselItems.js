const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carouselItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Decimal128,
        required: true
    },
    newItem: {
        type: Boolean,
        default: false
    },
    link: {
        type: String,
        required: true,
        default: "#"
    },
    linktext: {
        type: Text,
        required: true
    },
    bgImage: {
        type: Text,
        required: false,
        default: "NEEDS IMAGE URL HERE"
    }
});

module.exports = mongoose.model('carouselItem', carouselItemSchema);