
# SafeSpace: Anonymous Reporting for Workplace Harassment

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
**SafeSpace** is a web application that facilitates anonymous incident reporting for workplace harassment. It aims to provide a secure, user-friendly platform for employees to report incidents while maintaining anonymity. The platform also includes a dashboard for HR to analyze reported data, detect patterns, and take appropriate action.

## Features
- **Anonymous Reporting System**:
  - Multi-step form for incident reporting with fields like date, time, location, and type of harassment.
  - "Privacy Check" prompt allowing users to review and redact sensitive details.
- **End-to-End Encryption** for secure data submission.
- **Incident Analytics Dashboard**:
  - Visualizations for incidents by department, type, trends over time, and affiliation distribution.
  - Monthly and quarterly analytics reports for HR with de-identified data.

## Technologies Used
- **Frontend**: React, React-Bootstrap, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Encryption**: Crypto-JS
- **Data Visualization**: Chart.js
- **Styling**: CSS, React-Bootstrap

## Getting Started
These instructions will help you set up and run the project locally on your machine.

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** (for package management)

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/safespace.git
    cd safespace
    ```

2. **Install dependencies**:
    - **Backend**:
      ```bash
      cd backend
      npm install
      ```

    - **Frontend**:
      ```bash
      cd ../frontend
      npm install
      ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` directory with the following variables:
    ```env
    PORT=5001
    MONGODB_URI=mongodb://localhost:27017/safespace
    ENCRYPTION_KEY=your_secret_key
    ```

## Running the Application
1. **Start the MongoDB server**:
   Ensure that your MongoDB server is running locally or update the connection string for a cloud instance.

2. **Run the backend server**:
   ```bash
   cd backend
   npm run dev
   ```

3. **Run the frontend development server**:
   ```bash
   cd ../frontend
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Submit an Incident**: Navigate to the "Report Incident" page and fill out the form. Ensure the data is reviewed before submission.
- **View Analytics**: HR can access the "Analysis" page to view real-time incident data, trends, and distributions.

## API Endpoints
- **POST** `/api/incidents/submit`: Submits a new incident report.
- **GET** `/api/incidents/analysis`: Retrieves aggregated incident data for visualization.

## Project Structure
```
safespace
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── incidentController.js
│   ├── models
│   │   └── Incident.js
│   ├── routes
│   │   └── incidentRoutes.js
│   ├── utils
│   │   └── encryption.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   ├── pages
    │   │   ├── IncidentForm.js
    │   │   └── AnalysisPage.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    ├── .env
    └── package.json
```

## Future Enhancements
- **Customizable Alerts**: Implement notifications for HR when specific incident patterns are detected.
- **Multi-language Support**: Enhance accessibility with multiple language options.
- **User Authentication**: Add authentication for more secure access to HR dashboards.
- **Real Time Chat Support**: Integrate a real-time chat support feature to assist users during the reporting process and provide immediate help.

## Contributing
Contributions are welcome! Feel free to open a pull request or issue for suggestions and improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
