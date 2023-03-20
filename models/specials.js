const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecialSchema = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true,
        autoincrement: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Decimal128,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        default: "#"
    }
});

module.exports = mongoose.model('special', SpecialSchema);