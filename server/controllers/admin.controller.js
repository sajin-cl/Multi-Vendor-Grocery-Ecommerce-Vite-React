const Category = require('../models/category.model');
const Brand = require('../models/brand.model')

exports.addCategory = async (req, res) => {
  try {

    const { name, description } = req.body;

    if (!name) return res.status(400).json({ error: 'category is required' });

    const existing = await Category.findOne({ name });
    if (existing) return res.status(400).json({ error: 'A Category with this name already exists' });

    const isAdmin = req.session.userData?.role === 'admin' ? true : false;

    const category = await Category.create({ name, description, isAdmin });
    res.status(201).json({ message: 'Category created', category })

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create category' })
  }
};


exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch Categories' })
  }
};


exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    console.log(category)
    res.status(200).json(category);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch category' });
  };
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await Category.findById(id);

    const existing = await Category.findOne({ name, _id: { $ne: id } });
    if (existing) return res.status(400).json({ error: 'A category with this name already exists' });

    if (name !== undefined) category.name = name;
    if (description !== undefined) category.description = description;

    await category.save();
    return res.status(200).json(category);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to update the category' })
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: 'category deleted' });
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to delete category' });
  }

};

exports.addBrand = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) return res.status(400).json({ error: 'Brand name is required' });

    const existing = await Brand.findOne({ name });
    if (existing) return res.status(400).json({ error: 'A brand with this name already exists' });

    const isAdmin = req.session.userData?.role === 'admin';

    const brand = await Brand.create({ name, description, isAdmin });
    res.status(201).json({ message: 'Brand created', brand });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create brand' });
  }

};

exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch the brands' });
  }
};

exports.editBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findById(id);
    res.status(200).json(brand);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch the brand' });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const brand = await Brand.findById(id);

    const existing = await Brand.findOne({ name, _id: { $ne: id } });
    if (existing) return res.status(400).json({ error: 'A brand with this name already exists' });

    if (name !== undefined) brand.name = name;
    if (description !== undefined) brand.description = description;

    await brand.save();
    res.status(200).json(brand);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update brand' });
  }
};


exports.deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    await Brand.findByIdAndDelete(id);
    res.status(200).json({ message: 'Brand deleted' })
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete brand' })
  }
};