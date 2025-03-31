import React from 'react'
import './ManagerDashboard.css'
import ManagerHeaderContent from '../components/ManagerHeaderContent/ManagerHeaderContent'

function ManagerDashboard() {
  return (
    <>
      <ManagerHeaderContent/>
      <div 
        style={{
          backgroundImage: 'url(flowerdash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          marginTop: '-75px',
        }}
      >
        <div className="manbodycontent">
          <header className="dashboard-header">
            <h1>Welcome</h1>
          </header>
          
          <div className="card-container">
            <div className="dashboard-card alert-card">
              <h2>Low Stock Alerts</h2>
              <p>3 Items are running low on stock.</p>
            </div>
            <div className="dashboard-card report-card">
              <h2>Reports</h2>
              <p>New Report Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagerDashboard