const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counterController');

router.get('/', counterController.getCounter);
router.post('/increment', counterController.incrementCounter);
router.put('/reset', counterController.resetCounter);

module.exports = router;