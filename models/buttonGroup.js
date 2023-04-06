const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ButtonGroupSchema = new Schema({
    buttonFunction: String,
    buttonStyle: String,
    buttonText: String,
    id: String
});
module.exports = mongoose.model("ButtonGroup", ButtonGroupSchema)