const express = require('express');
const router = express.Router();

const sellerAuth = require('../middleware/sellerAuth');

const productsController = require('../controllers/product.controller');

router.post('', sellerAuth, productsController.addProducts);



module.exports = router;