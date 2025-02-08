const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type:String, required: true },
    price: { type: Number, required: true },
category : { type: String, default: "General" },
stock : { type: Number, default: 0 },
createdAt : { type: Date, default: Date.now },
});

const Product = mongoose.model('Product',productSchema);

module.exports = product;