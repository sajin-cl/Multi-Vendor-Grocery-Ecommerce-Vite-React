const Category = require('../models/category.model');
const Product = require('../models/product.model');
const Brand = require('../models/brand.model');


exports.addProducts = async (req, res) => {

  try {
    const { name, description, category, brand, stock, price } = req.body;

    if (!name || !description || !category || !brand || !stock || !price) return res.status(400).json({ error: 'All fields are required' });

    if (!req.files || !req.files?.productImage) return res.status(400).json({ error: 'Product image is required' });

    const categoryExists = await Category.findById(category);
    if (!categoryExists) return res.status(400).json({ error: 'Invalid Category' });

    const brandExists = await Brand.findById(brand);
    if (!brandExists) return res.status(400).json({ error: 'Invalid Brand' });


    const image = req.files.productImage;
    const fileName = Date.now() + '_' + image.name;
    const uploadPath = `public/assets/product/${fileName}`;

    await image.mv(uploadPath);

    const product = await Product.create({
      name,
      description,
      brand,
      category,
      stock,
      price,
      sellerId: req.userData?.id,
      isSeller: req.userData?.role === 'seller' ? true : false,
      image_url: `/assets/product/${fileName}`
    });

    res.status(201).json({
      message: 'Product added successfully',
      product
    })

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add Product' });
  }
};


exports.getProducts = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const { category, search } = req.query;

    let filter = {};

    if (req.userData?.role === 'seller') filter.sellerId = req.userData.id;

    if (category) filter.category = req.query.category;

    if (search) filter.search = req.query.search;


    const products = await Product.find(filter)
      .populate({
        path: 'sellerId',
        match: { isBlocked: false }
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const visibleProducts = products.filter(prod => prod.sellerId !== null);
    const totalProducts = await Product.countDocuments(filter);

    res.status(200).json({
      products: visibleProducts,
      page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts
    })


  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};


exports.getProductsId = async (req, res) => {
  try {

    const { id } = req.params;

    const product = await Product.findById(id).populate('category').populate('brand');
    if (!product) return res.status(400).json({ error: 'Product not found' });

    res.status(200).json(product);

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to fetch product' });
  }
};

exports.updateProducts = async (req, res) => {
  try {

    const { id } = req.params;

    const { name, description, category, brand, stock, price } = req.body;

    if (!name || !description || !category || !brand || !stock || !price) return res.status(400).json({ error: 'All fields are required' });

    const categoryExists = await Category.findById(category);
    if (!categoryExists) return res.status(400).json({ error: 'Invalid category' });

    const brandExists = await Brand.findById(brand);
    if (!brandExists) return res.status(400).json({ error: 'Invalid Brand' });


    const updatedData = {
      name,
      description,
      category,
      brand,
      stock,
      price,
      sellerId: req.userData?.id,
      isSeller: req.userData?.role === 'seller' ? true : false
    }

    if (req.files && req.files.productImage) {
      const image = req.files.productImage;
      const fileName = Date.now() + "_" + image.name;
      const uploadPath = `public/assets/product/${fileName}`;
      await image.mv(uploadPath);

      updatedData.image_url = `/assets/product/${fileName}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });

    return res.status(200).json({
      message: 'Product updated',
      product: updatedProduct
    })

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update products' });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
}