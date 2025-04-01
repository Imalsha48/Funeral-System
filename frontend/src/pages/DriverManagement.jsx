import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./DriverManagement.css";

const DriverManagement = () =>{
    const navigate = useNavigate();
    const[searchQuery, setSearchQuery] = useState("");
    const[drivers, setDrivers] = useState([
        {
            driver_id: 1,
            name: "John Doe",
            phone_number: "123-456-7890",
            license_number: "ABC12345",
            availability: "Available",
            assigned_vehicle: null,
        },

        {
            driver_id: 2,
            name: "Jane Smith",
            phone_number: "987-654-3210",
            license_number: "XYZ67890",
            availability: "Assigned",
            assigned_vehicle: 1,
        },
    ]);

    const handleDelete = (id) => {
        setDrivers(drivers.filter((driver) => driver.driver_id !==id));
    };

    const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
);

return(
    <div className="driver-management-wrapper">

        <h1>Driver Management</h1>
        <input
        type="text"
        className="search-bar"
        placeholder="Search drivers..."
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />

        <button className="add-btn" onClick={()=> navigate("/driverregistration")}>Add Driver</button>

        <table className="driver-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>License</th>
                <th>Availability</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {filteredDrivers.map((driver) =>(
                <tr key={driver.driver_id}>
                    <td>{driver.driver_id}</td>
                    <td>{driver.name}</td>
                    <td>{driver.phone_number}</td>
                    <td>{driver.license_number}</td>
                    <td className={driver.availability.toLowerCase()}>{driver.availability}</td>

                    <td>
                        <button className="edit-btn">Edit</button>
                        <button className="assign-btn">Assign</button>
                        <button className="delete-btn" onClick={() => handleDelete(driver.driver_id)}>Delete</button>
                    </td>
                </tr>
            ))}

        </tbody>
        </table>


    </div>

);
};

export default DriverManagement;