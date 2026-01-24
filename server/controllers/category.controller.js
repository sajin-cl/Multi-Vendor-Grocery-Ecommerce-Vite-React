const Category = require('../models/category.model')

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json({categories});
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}