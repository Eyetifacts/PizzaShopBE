const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestFlagSchema = new Schema({
   isDisplayed: {
    type: Boolean,
    default: false
   },
   text: String
});
module.exports = mongoose.model("interestFlag", interestFlagSchema)
