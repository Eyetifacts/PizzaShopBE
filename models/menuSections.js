const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSectionsSchema = new Schema({
    bannerCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bannerCard'
    },
    description: String,
    id: String,
    menuCarousel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuCarousel'
    },
    productCards: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productCards'
    },
    title: String,
    type: String,
    title: String
});
module.exports = mongoose.model("MenuSections", menuSectionsSchema)