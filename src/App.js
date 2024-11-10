import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import IncidentForm from './pages/IncidentForm';
import HRDashboard from './pages/HRDashboard';
import AnalysisPage from './pages/AnalysisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/report-incident" element={<IncidentForm />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path= "/analysis" element = {<AnalysisPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
