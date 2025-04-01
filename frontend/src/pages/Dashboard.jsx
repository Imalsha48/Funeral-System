import React from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Overview Cards */}
      <div className="overview">
        <div className="card">
            <img src="/images/vehicle.jpeg" alt="Vehicle Icon" className="card-icon small-icon"/>
          <h3>Total Vehicles</h3>
          <p>10 Active, 4 In Use</p>
        </div>
        <div className="card">
        <img src="/images/driver.jpeg" alt="Driver Icon" className="card-icon small-icon" />
          <h3>Total Drivers</h3>
          <p>8 Available, 6 Assigned</p>
        </div>
        <div className="card">
        <img src="/images/transport.jpeg" alt="Transport Icon" className="card-icon small-icon" />
          <h3>Ongoing Funeral Transports</h3>
          <p>2 In Progress, 5 Completed</p>
        </div>
        <div className="card alert">
        <img src="/images/alert.jpeg" alt="Alert Icon" className="card-icon small-icon" />
          <h3>Urgent Alerts</h3>
          <p>1 Vehicle Breakdown, 2 Low Fuel</p>
        </div>
      </div>

      {/* Active Funeral Transports */}
      <div className="section">
        <h2>Active Funeral Transports</h2>
        <ul>
          <li>🚘 Vehicle #A12 - Route: City Center to Cemetery</li>
          <li>🚘 Vehicle #B45 - Route: St. Mary’s Church to Greenfield</li>
        </ul>
      </div>

      {/* Urgent Alerts */}
      <div className="section alert-section">
        <h2>Urgent Alerts</h2>
        <ul>
          <li>⚠️ Vehicle #C78 - Low Fuel</li>
          <li>⚠️ Vehicle #D22 - Breakdown reported</li>
        </ul>
      </div>

      {/* Recent Activity Log */}
      <div className="section">
        <h2>Recent Activity Log</h2>
        <ul>
          <li>✔️ Vehicle #A12 assigned to funeral ID #F123</li>
          <li>✔️ Driver John Doe completed Route #7</li>
          <li>✔️ Fuel log updated for Vehicle #B45</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;