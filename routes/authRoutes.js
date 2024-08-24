const express = require('express');
const { signup, login, getProfile, confirmEmail } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.get('/confirm/:token', confirmEmail);

module.exports = router;
