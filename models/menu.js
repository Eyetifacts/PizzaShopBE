const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  menuSections: Array
}, {collection: 'menu'});
module.exports = mongoose.model("menu", menuSchema)