import React, { useState } from 'react';
import { Container, Form, Button, Card, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const IncidentForm = () => {
  const navigate = useNavigate();

  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [anonymous, setAnonymous] = useState(true);
  const [affiliation, setAffiliation] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [ethnicity, setEthnicity] = useState([]);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEthnicityChange = (event) => {
    const { value, checked } = event.target;
    setEthnicity((prev) => (checked ? [...prev, value] : prev.filter((e) => e !== value)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reportData = {
      incidentType,
      description,
      date,
      location,
      anonymous,
      affiliation,
      department,
      gender,
      ethnicity,
    };

    try {
      const response = await fetch('http://localhost:5001/api/incidents/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        alert('Incident report submitted successfully!');
        // Reset all fields after submission
        setIncidentType('');
        setDescription('');
        setDate('');
        setLocation('');
        setAnonymous(true);
        setAffiliation('');
        setDepartment('');
        setGender('');
        setEthnicity([]);
      } else {
        alert('Failed to submit incident report.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the report.');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center" style={{ backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      {/* Header */}
      <div className="w-100 py-3" style={{ backgroundColor: '#005bbb' }}>
        <Container className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logoub.png`}
            alt="University at Buffalo Logo"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <h2 className="text-white mb-0">Incident Report</h2>
          {/* Home Button */}
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={() => navigate(-1)} className="me-2">
              Home
            </Button>
          </Nav>
        </Container>
      </div>

      {/* Form Card */}
      <Container className="my-5" style={{ maxWidth: '600px' }}>
        <Card className="p-4 shadow">
          <h3 className="text-center mb-4">Report an Incident</h3>
          <Form onSubmit={handleSubmit}>
            {/* Incident Type Dropdown */}
            <Form.Group controlId="incidentType" className="mb-3">
              <Form.Label>Type of Incident</Form.Label>
              <Form.Select
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
                required
              >
                <option value="">Select Incident Type</option>
                <option value="Harassment">Harassment</option>
                <option value="Discrimination">Discrimination</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>

            {/* Description Text Area */}
            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe the incident"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            {/* Date of Incident */}
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Date of Incident</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            {/* Location Input */}
            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Location (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            {/* University Affiliation Dropdown */}
            <Form.Group controlId="affiliation" className="mb-3">
              <Form.Label>University Affiliation</Form.Label>
              <Form.Select
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
                required
              >
                <option value="">Select Affiliation</option>
                <option value="Applicant for Admission">Applicant for Admission</option>
                <option value="Applicant for Employment">Applicant for Employment</option>
                <option value="Campus Dining and Shops">Campus Dining and Shops</option>
                <option value="Graduate Student">Graduate Student</option>
                <option value="Research Foundation">Research Foundation</option>
                <option value="State">State</option>
                <option value="UB Foundation">UB Foundation</option>
                <option value="Undergraduate Student">Undergraduate Student</option>
                <option value="Vendor">Vendor</option>
                <option value="Visitor">Visitor</option>
              </Form.Select>
            </Form.Group>

            {/* Department or School */}
            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department or School</Form.Label>
              <Form.Control
                type="text"
                placeholder="Department or School"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </Form.Group>

            {/* Gender Radio Button Group */}
            <Form.Group controlId="gender" className="mb-3">
              <Form.Label>Gender (optional)</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Female"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleGenderChange}
                />
                <Form.Check
                  type="radio"
                  label="Male"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleGenderChange}
                />
                <Form.Check
                  type="radio"
                  label="Nonbinary"
                  value="Nonbinary"
                  checked={gender === 'Nonbinary'}
                  onChange={handleGenderChange}
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  value="Other"
                  checked={gender === 'Other'}
                  onChange={handleGenderChange}
                />
                <Form.Check
                  type="radio"
                  label="Prefer not to say"
                  value="Prefer not to say"
                  checked={gender === 'Prefer not to say'}
                  onChange={handleGenderChange}
                />
              </div>
            </Form.Group>

            {/* Race and Ethnicity Checkbox Group */}
            <Form.Group controlId="ethnicity" className="mb-3">
              <Form.Label>Race and Ethnicity (select as many as apply, optional)</Form.Label>
              <div>
              <Form.Check
                label="White"
                type="checkbox"
                value="White"
                checked={ethnicity.includes("White")}
                onChange={handleEthnicityChange}
              />
              <Form.Check
                label="Black/African American"
                type="checkbox"
                value="Black/African American"
                checked={ethnicity.includes("Black/African American")}
                onChange={handleEthnicityChange}
              />
              <Form.Check
                label="Hispanic or Latinx"
                type="checkbox"
                value="Hispanic or Latinx"
                checked={ethnicity.includes("Hispanic or Latinx")}
                onChange={handleEthnicityChange}
              />
              <Form.Check
                label="Asian"
                type="checkbox"
                value="Asian"
                checked={ethnicity.includes("Asian")}
                onChange={handleEthnicityChange}
              />
              <Form.Check
                label="American Indian or Alaska Native"
                type="checkbox"
                value="American Indian or Alaska Native"
                checked={ethnicity.includes("American Indian or Alaska Native")}
                onChange={handleEthnicityChange}
              />
              <Form.Check
                label="Native Hawaiian or Other Pacific Islander"
                type="checkbox"
                value="Native Hawaiian or Other Pacific Islander"
                checked={ethnicity.includes("Native Hawaiian or Other Pacific Islander")}
                onChange={handleEthnicityChange}
              />
            </div>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="w-100">
              Submit Report
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default IncidentForm;
