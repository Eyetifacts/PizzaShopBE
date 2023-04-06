const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerCardSchema = new Schema({
    buttonGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buttonGroup'
    },
    description: String,
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image'
    },
    interestFlag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'interestFlag'
    },
    price: Double,
    title: String,
});
module.exports = mongoose.model("BannerCard", BannerCardSchema)