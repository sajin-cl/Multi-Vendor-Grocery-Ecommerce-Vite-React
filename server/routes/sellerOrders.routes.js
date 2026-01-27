const express = require('express');
const router = express.Router();

const sellerAuth = require('../middleware/sellerAuth');

const orderController = require('../controllers/sellerOrders.controller');

router.get('/', sellerAuth, orderController.getSellerOrders);
router.patch('/:orderId/item/:itemId/status', sellerAuth, orderController.updateItemStatus);


module.exports = router;