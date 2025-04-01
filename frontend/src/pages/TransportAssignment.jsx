import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./TransportAssignment.css";

const TransportAssignment =()=>{
    const [booking, setBooking]= useState("");
    const [vehicle, setVehicle]= useState("");
    const [driver, setDriver] = useState("");
    const [status, setStatus] = useState("Scheduled");

    const handleUpdate = () => {
        alert(`Transport updated: ${booking}, ${vehicle}, ${driver}, Status: ${status}`);
      };

      return (
        <div className="transport-assignment-wrapper">
            <div className ="transport-assignment-container">
                <h1>Transport Assignment</h1>

                <div className="form-group">
                    <label>Funeral Booking</label>
                    <select value={booking} onChange={(e)=> setBooking(e.target.value)}>
                        <option value="FB-101">FB-101</option>
                        <option value="FB-102">FB-102</option>
                    </select>
                </div>

                <div className="form-group">
                <label>Vehicle:</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                <option value="">Select Vehicle</option>
                <option value="Toyota Hiace">Toyota Hiace</option>
                <option value="Nissan Caravan">Nissan Caravan</option>
                </select>
                </div>

                <div className="form-group">
                <label>Driver:</label>
                <select value={driver} onChange={(e) => setDriver(e.target.value)}>
                <option value="">Select Driver</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                </select>
                </div>

                <div className="form-group">
                <label>Transport Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Scheduled">Scheduled</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                </select>
                </div>

                <button className="update-btn" onClick={handleUpdate}>Update Transport</button>


            </div>
        </div>
      );
};

export default TransportAssignment;