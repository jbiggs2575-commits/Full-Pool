const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = new Schema({

  name: { type: String, required: true },
  image: { type: String, required: false },
  alt: { type: String, required: false },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  qty: { type: Number, default: 0 },
  description: { type: String },
  type: { type: String }
});

module.exports = mongoose.model('product', ProductSchema)

