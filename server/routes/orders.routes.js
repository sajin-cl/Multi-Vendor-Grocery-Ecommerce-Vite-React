const express = require('express');
const router = express.Router();

const userAuth = require('../middleware/userAuth');

const orderController = require('../controllers/order.controller');


router.post('/checkout', userAuth, orderController.placeOrder);
router.get('/', userAuth, orderController.getOrders);




module.exports = router;