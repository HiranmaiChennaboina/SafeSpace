const Incident = require('../models/Incident');
const { encryptText } = require('../utils/encryption');

exports.submitIncident = async (req, res) => {
  try {
    const encryptedDescription = encryptText(req.body.description);

    const newIncident = new Incident({
      ...req.body,
      description: encryptedDescription,
    });

    await newIncident.save();
    res.status(201).send({ message: 'Incident report submitted successfully.' });
  } catch (error) {
    res.status(500).send({ error: 'Error submitting report' });
  }
};

exports.getIncidentAnalysis = async (req, res) => {
  try {
    const incidents = await Incident.find();
    const analysis = incidents.reduce((acc, incident) => {
      acc[incident.incidentType] = (acc[incident.incidentType] || 0) + 1;
      return acc;
    }, {});

    res.status(200).send(analysis);
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving incident analysis' });
  }
};
