const express = require('express');
const router = express.Router();

const sellerAuth = require('../middleware/sellerAuth');

const productsController = require('../controllers/product.controller');

router.post('', sellerAuth, productsController.addProducts);
router.get('',  productsController.getProducts);
router.get('/:id', sellerAuth, productsController.editProducts);
router.patch('/:id', sellerAuth, productsController.updateProducts);
router.delete('/:id', sellerAuth, productsController.deleteProduct);



module.exports = router;