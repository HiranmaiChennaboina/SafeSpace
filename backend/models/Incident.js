const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  incidentType: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String },
  anonymous: { type: Boolean, required: true },
  affiliation: { type: String, required: true },
  department: { type: String, required: true },
  gender: { type: [String], default: [] },
  ethnicity: { type: [String], default: [] },
});

module.exports = mongoose.model('Incident', incidentSchema);
