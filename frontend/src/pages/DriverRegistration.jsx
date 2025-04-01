
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./DriverRegistration.css";

const DriverRegistration = () => {
  const [driverData, setDriverData] = useState({
    name: "",
    licenseNumber: "",
    contactNumber: "",
    experience: "",
    assignedVehicle: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!driverData.name.trim()) newErrors.name = "Name is required";
    if (!driverData.licenseNumber.trim()) newErrors.licenseNumber = "License number is required";
    if (!/^\d{10}$/.test(driverData.contactNumber)) 
      newErrors.contactNumber = "Enter a valid 10-digit phone number";
    if (!driverData.experience || driverData.experience < 0) 
      newErrors.experience = "Enter valid years of experience";
    if (!driverData.assignedVehicle.trim()) 
      newErrors.assignedVehicle = "Vehicle assignment is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData({
      ...driverData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log("Driver Registered:", driverData);
    }
  };

  return (
    <div className="driver-registration-wrapper">
      
      <div className="driver-registration-container">
        <header className="driver-registration-header">
          <h1>Register New Driver</h1>
          <p>Complete the form to add a driver to our transportation services</p>
        </header>

        {submitted ? (
          <div className="thank-you-message">
            <h2>Driver Registered!</h2>
            <p>The driver has been successfully added to the system.</p>
            <button 
              className="register-another-btn"
              onClick={() => {
                setSubmitted(false);
                setDriverData({
                  name: "",
                  licenseNumber: "",
                  contactNumber: "",
                  experience: "",
                  assignedVehicle: "",
                });
                setErrors({});
              }}
            >
              Add Another Driver
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="driver-registration-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={driverData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={driverData.licenseNumber}
                onChange={handleChange}
                placeholder="DL12345678"
              />
              {errors.licenseNumber && <span className="error">{errors.licenseNumber}</span>}
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={driverData.contactNumber}
                onChange={handleChange}
                placeholder="1234567890"
              />
              {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
            </div>

            <div className="form-group">
              <label>Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={driverData.experience}
                onChange={handleChange}
                min="0"
                placeholder="5"
              />
              {errors.experience && <span className="error">{errors.experience}</span>}
            </div>

            <div className="form-group">
              <label>Assigned Vehicle</label>
              <input
                type="text"
                name="assignedVehicle"
                value={driverData.assignedVehicle}
                onChange={handleChange}
                placeholder="Vehicle ID or Model"
              />
              {errors.assignedVehicle && <span className="error">{errors.assignedVehicle}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Register Driver
            </button>
          </form>
        )}

        <footer className="driver-registration-footer">
          <p>© 2025 Funeral Management Services</p>
        </footer>
      </div>
    </div>
  );
};

export default DriverRegistration;