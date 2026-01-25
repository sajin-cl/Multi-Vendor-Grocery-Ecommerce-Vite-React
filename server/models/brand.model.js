const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });


const brandModel = mongoose.model('Brand', brandSchema);

module.exports = brandModel;