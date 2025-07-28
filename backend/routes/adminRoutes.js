const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.getDashboard);
router.get('/email-stats', adminController.getEmailStats);

module.exports = router;
