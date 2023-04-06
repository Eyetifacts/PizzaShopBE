const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
    detailsUrl: String, 
    text: String
});
module.exports = mongoose.model("details", detailsSchema)