const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/new', userController.create);
router.get('/all', userController.get);

module.exports = router;