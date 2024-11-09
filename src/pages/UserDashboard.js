import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';


const UserDashboard = () => {
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
            <Button variant="outline-light" className="me-2" href="/report-incident">Report Incident</Button>
            <Button variant="outline-light" className="me-2" href="/chat-support">Chat Support</Button>
            <Button variant="outline-light" href="/resources">Resources</Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="text-center mt-5">
        <h2>Welcome to the Safe Space</h2>
        <p>
          This Page provides access to resources, incident reporting, and support services to help you in creating a safer workplace.
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

export default UserDashboard;