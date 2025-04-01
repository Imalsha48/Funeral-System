import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DriverRegistration from "./pages/DriverRegistration";
import VehicleManagement from "./pages/VehicleManagement";
import DriverManagement from "./pages/DriverManagement";
import TransportAssignment from "./pages/TransportAssignment";
import Dashboard from "./pages/Dashboard";



const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
        <Route path="/driverregistration" element={<DriverRegistration />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/vehiclemanagement" element={<VehicleManagement />} />
        <Route path="/drivermanagement" element={<DriverManagement />} />
        <Route path="/transportassignment" element={<TransportAssignment />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
