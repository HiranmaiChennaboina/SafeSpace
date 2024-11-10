import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HRDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/'); // Redirect to the login page
  };
  return (
    <div>
      {/* Header Bar */}
      <Navbar style={{ backgroundColor: '#005bbb' }} variant="dark" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src={`${process.env.PUBLIC_URL}/logoub.png`} 
              alt="University at Buffalo Logo"
              style={{ width: '50px', marginRight: '10px' }}
            />
            SafeSpace
          </Navbar.Brand>
          {/* Header Buttons */}
          <Nav className="ml-auto">
            <Button variant="outline-light" className="mx-2" href="/report-incident">Report Incident</Button>
            <Button variant="outline-light" className="mx-2" href="/chat-support">Chat Support</Button>
            <Button variant="outline-light" className="mx-2" href="/resources">Resources</Button>
            <Button variant="outline-light" className="mx-2" href="/Analysis"> Analysis</Button>
            <Button variant="outline-light" className="mx-2" onClick={handleLogout}>Logout</Button> {/* Logout Button */}
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="text-center mt-5">
        <h2>Welcome to SafeSpace</h2>
        <p>
          Access detailed analytics, reports, and settings to help manage workplace safety and respond to incidents effectively.
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/logoub2.png`}
          alt="University at Buffalo Logo"
          style={{ width: '1000px', marginTop: '50px' }}
        />
      </Container>
    </div>
  );
};

export default HRDashboard;