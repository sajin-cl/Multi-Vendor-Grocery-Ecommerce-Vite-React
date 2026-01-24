const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  stock: {
    type: Number,
    min: 0,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  image_url: {
    type: String,
    required: true,
    trim: true
  },
  sellerId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;