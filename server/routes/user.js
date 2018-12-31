const express = require('express');
const studentController = require('../controllers/user');

const router = express.Router();

router.post('/new', studentController.create);
router.get('/all', studentController.get);

module.exports = router;