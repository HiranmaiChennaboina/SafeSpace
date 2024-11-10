const Incident = require('../models/Incident');
const User = require('../models/User');
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
  
      const departmentCounts = incidents.reduce((acc, incident) => {
        acc[incident.department] = (acc[incident.department] || 0) + 1;
        return acc;
      }, {});
  
      const incidentTypeCounts = incidents.reduce((acc, incident) => {
        acc[incident.incidentType] = (acc[incident.incidentType] || 0) + 1;
        return acc;
      }, {});
  
      const trendCounts = incidents.reduce((acc, incident) => {
        const date = new Date(incident.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
  
      const affiliationCounts = incidents.reduce((acc, incident) => {
        acc[incident.affiliation] = (acc[incident.affiliation] || 0) + 1;
        return acc;
      }, {});
  
      const analysis = {
        departmentCounts,
        incidentTypeCounts,
        trendCounts,
        affiliationCounts,
      };
  
      res.status(200).send(analysis);
    } catch (error) {
      console.error('Error retrieving incident analysis:', error);
      res.status(500).send({ error: 'Error retrieving incident analysis' });
    }
  };
  
  exports.userAuthentication = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isMatch = password === user.password;
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
      return res.status(200).json({ role: user.role });
    } catch (error) {
      console.error("Error during authentication:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };