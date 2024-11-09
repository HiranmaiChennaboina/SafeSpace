import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import IncidentForm from './pages/IncidentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/report-incident" element={<IncidentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
