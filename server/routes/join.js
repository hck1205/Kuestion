const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/join', userController.join)

module.exports = router;