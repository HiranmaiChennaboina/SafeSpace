import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import '/Users/hiranmaichennaboina/my_learning/SafeSpace/src/AnalysisPage.css'; // Import the CSS file

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

const AnalysisPage = () => {
  const navigate = useNavigate();
  const [analysisData, setAnalysisData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/incidents/analysis')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log data to inspect the response structure
        setAnalysisData(data);
      })
      .catch(error => console.error('Error fetching analysis data:', error));
  }, []);

  // Ensure that analysisData is valid before accessing it
  const isDataAvailable = analysisData && Object.keys(analysisData).length > 0;

  return (
    <div>
      {/* Header */}
      <div className="w-100 py-3" style={{ backgroundColor: '#005bbb' }}>
        <Container className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logoub.png`}
            alt="University at Buffalo Logo"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <h2 className="text-white mb-0">Incident Analytics Dashboard</h2>
          {/* Home Button */}
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={() => navigate(-1)} className="me-2">
              Home
            </Button>
          </Nav>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="mt-4" style={{ maxWidth: '1200px' }}>
        {!isDataAvailable ? (
          <p>Loading data...</p>
        ) : (
          <div className="chart-grid">
            {/* Incidents by Department Chart */}
            <div className="chart-item">
              <h4 className="text-center">Incidents by Department</h4>
              <Bar
                data={{
                  labels: Object.keys(analysisData.departmentCounts || {}),
                  datasets: [
                    {
                      label: 'Number of Incidents',
                      data: Object.values(analysisData.departmentCounts || {}),
                      backgroundColor: 'rgba(54, 162, 235, 0.6)',
                      borderColor: 'rgba(54, 162, 235, 1)',
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: '#e0e0e0',
                        },
                      },
                    },
                  }}
              />
            </div>
            {/* Incidents by Type Chart */}
            <div className="chart-item">
              <h4 className="text-center">Incidents by Type</h4>
              <Pie
                data={{
                  labels: Object.keys(analysisData.incidentTypeCounts || {}),
                  datasets: [
                    {
                      label: 'Number of Incidents',
                      data: Object.values(analysisData.incidentTypeCounts || {}),
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
            {/* Incident Trends Over Time Chart */}
            <div className="chart-item">
              <h4 className="text-center">Incident Trends Over Time</h4>
              <Line
                data={{
                  labels: Object.keys(analysisData.trendCounts || {}),
                  datasets: [
                    {
                      label: 'Incidents Over Time',
                      data: Object.values(analysisData.trendCounts || {}),
                      backgroundColor: 'rgba(75, 192, 192, 0.6)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 2,
                      fill: true,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      type: 'category',
                      time: {
                        unit: 'month',
                      },
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
            {/* Affiliation Distribution Chart */}
            <div className="chart-item">
              <h4 className="text-center">Affiliation Distribution</h4>
              <Doughnut
                data={{
                  labels: Object.keys(analysisData.affiliationCounts || {}),
                  datasets: [
                    {
                      label: 'Incidents by Affiliation',
                      data: Object.values(analysisData.affiliationCounts || {}),
                      backgroundColor: [
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                      ],
                      borderColor: [
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AnalysisPage;
