const Brand = require('../models/brand.model');

exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.find().sort({ name: 1 });
    res.json({brands});
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}