const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/check-session', authController.checkSession);


module.exports = router;





