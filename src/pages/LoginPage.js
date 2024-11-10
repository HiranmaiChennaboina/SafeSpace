import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Password cannot be empty");
      return;
    }
    if (username === "") {
      alert("Username cannot be empty");
      return;
    }

    // If we want a secure verification approach here, we can set up a backend endpoint(to a university login details) to verify credentials.
    // from Frontend send credentials to the backend. In the backend verify credentials against a secure source, then
    // respond with a success flag or error message.

    // Verify credentials in frontend for now due to time constraints.
    const isHR = username.toLowerCase() === "hr" && password === "hrpassword";
    const isUser =
      (username.toLowerCase() === "user1" && password === "user1password") ||
      (username.toLowerCase() === "user2" && password === "user2password") ||
      (username.toLowerCase() === "user3" && password === "user3password");

    if (isHR) {
      // Redirect to HR dashboard and clear credentials
      navigate("/hr-dashboard");
      setUsername(""); // Clear username
      setPassword(""); // Clear password
    } else if (isUser) {
      // Redirect to User dashboard and clear credentials
      navigate("/user-dashboard");
      setUsername(""); // Clear username
      setPassword(""); // Clear password
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <Container className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/logoub.png`}
          alt="University at Buffalo Logo"
          className="mb-3"
          style={{ width: "200px" }}
        />
        <h2 className="mb-4">Login Required</h2>

        <Card
          style={{ maxWidth: "400px", margin: "0 auto" }}
          className="p-4 shadow-sm"
        >
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername" className="mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                </div>
                <Form.Control
                  type="text"
                  placeholder="UBITName"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                </div>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Button type="submit" variant="dark" className="w-100 mb-3">
              Log In
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
