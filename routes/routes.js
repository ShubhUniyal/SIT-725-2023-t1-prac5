const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/api/cards', controller.getAllCards);
router.post('/api/addCard', controller.addCard);

module.exports = router;