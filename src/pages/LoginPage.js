import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Password cannot be empty");
      return;
    }
    if (username === "") {
      alert("Username cannot be empty");
      return;
    }

    const creds = {username,password}
    try {
      const response = await fetch('http://localhost:5001/api/incidents/authorize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
      });
      if (response.ok) {
        const data = await response.json();
        const role = data.role;
        
        // Clear credentials
        setUsername("");
        setPassword("");
        if (role.toLowerCase() === "hr") {
          navigate("/hr-dashboard");
        } else if (role.toLowerCase() === "user") {
          navigate("/user-dashboard");
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
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
