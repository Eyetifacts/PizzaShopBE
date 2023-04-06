const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
 /*  menuSections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuSections'
  }]  */
  menuSections: Array
}, {collection: 'menu'});
module.exports = mongoose.model("menu", menuSchema)