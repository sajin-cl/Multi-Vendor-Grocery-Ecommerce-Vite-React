const Category = require('../models/category.model');
const Product = require('../models/product.model');
const Brand = require('../models/brand.model');

exports.addProducts = async (req, res) => {
  console.log('req.body:', req.body);
  console.log('req.files:', req.files);

  try {
    const { name, description, category, brand, stock, price } = req.body;

    const sellerId = req.session.userData.id;

    if (!name || !description || !category || !brand || !stock || !price) return res.status(400).json({ error: 'All fields are required' });

    if (!req.files || !req.files?.productImage) return res.status(400).json({ error: 'Product image is required' });

    const categoryExists = await Category.findById(category);
    if (!categoryExists) return res.status(400).json({ error: 'Invalid Category' });

    const brandExists = await Brand.findById(brand);
    if (!brandExists) return res.status(400).json({ error: 'Invalid Brand' });


    const image = req.files.productImage;
    const filename = Date.now() + '_' + image.name;
    const uploadPath = `public/assets/product/${filename}`;

    await image.mv(uploadPath);

    const product = await Product.create({
      name,
      description,
      brand,
      category,
      stock,
      price,
      sellerId,
      image_url: `/assets/product/${filename}`
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