import React, { useState } from 'react';

const IncidentForm = () => {
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [anonymous, setAnonymous] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportData = {
      incidentType,
      description,
      date,
      location,
      anonymous,
    };
    console.log(reportData); // Placeholder for actual submission logic
    alert("Incident report submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Report an Incident</h2>
      <form onSubmit={handleSubmit}>
        {/* Incident Type Dropdown */}
        <label>
          Type of Incident:
          <select value={incidentType} onChange={(e) => setIncidentType(e.target.value)} required>
            <option value="">Select Incident Type</option>
            <option value="Harassment">Harassment</option>
            <option value="Discrimination">Discrimination</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {/* Description Text Area */}
        <label>
          Description:
          <textarea
            placeholder="Describe the incident"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        {/* Date of Incident */}
        <label>
          Date of Incident:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        {/* Location Input */}
        <label>
          Location:
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        {/* Anonymity Checkbox */}
        <label>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          />
          Remain Anonymous
        </label>

        {/* Submit Button */}
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default IncidentForm;
