const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');

router.get('/open/:id', trackingController.trackOpen);
router.get('/click/:id', trackingController.trackClick);
router.post('/payment', trackingController.simulatePayment);
router.post('/reply', trackingController.simulateReply);

module.exports = router;
