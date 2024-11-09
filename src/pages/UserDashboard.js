import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to SafeSpace</h2>
      <ul>
        <li><Link to="/report-incident">Report Incident</Link></li>
        <li><Link to="/chat-support">Chat Support</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </div>
  );
};

export default UserDashboard;
