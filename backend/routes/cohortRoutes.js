const express = require('express');
const router = express.Router();
const cohortController = require('../controllers/cohortController');

router.post('/apply', cohortController.submitApplication);
router.get('/status/:tracking_id', cohortController.getApplicationStatus);

module.exports = router;
