const express = require('express');
const { submitIncident, getIncidentAnalysis, userAuthentication } = require('../controllers/incidentController');
const router = express.Router();

router.post('/submit', submitIncident);
router.get('/analysis', getIncidentAnalysis);
router.post('/authorize', userAuthentication);

module.exports = router;
