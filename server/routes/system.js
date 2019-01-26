const express = require('express');
const systemcontroller = require('../controllers/system');

const router = express.Router();

router.get('/time', systemcontroller.get);

module.exports = router;
