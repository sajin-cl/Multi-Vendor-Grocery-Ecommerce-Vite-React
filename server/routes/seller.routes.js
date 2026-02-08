const express = require('express');
const router = express.Router();

const sellerAuth = require('../middleware/sellerAuth');

const sellerController = require('../controllers/seller.controller');

router.get('/orders', sellerAuth, sellerController.getSellerOrders);
router.patch('/orders/:orderId/item/:itemId/status', sellerAuth, sellerController.updateItemStatus);
router.get('/earnings', sellerAuth, sellerController.getSellerEarnings);
router.get('/dashboard', sellerAuth, sellerController.getSellerDashboard);
router.get('/profile', sellerAuth, sellerController.getSellerProfile);
router.patch("/profile", sellerAuth, sellerController.updateSellerProfile);


module.exports = router;