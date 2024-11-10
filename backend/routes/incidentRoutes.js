const express = require('express');
const { submitIncident, getIncidentAnalysis } = require('../controllers/incidentController');

const router = express.Router();

router.post('/submit', submitIncident);
router.get('/analysis', getIncidentAnalysis);

module.exports = router;
