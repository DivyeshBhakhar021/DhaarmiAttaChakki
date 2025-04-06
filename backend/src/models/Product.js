const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  description:{type:String, required: true},
  short_description:{type:String, required: true},
  Features:{type:String, required: true},
  Specification:{type:String, required: true},
  Warranty_Summary:{type:String, required: true},
   Usage:{type:String, required: true}
});

module.exports = mongoose.model("Product", productSchema);
