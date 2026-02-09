const express = require('express');
const router = express.Router();

const userAuth = require('../middleware/userAuth');
const userController = require('../controllers/user.controller');

router.get('/profile', userAuth, userController.getUserProfile);

module.exports = router;