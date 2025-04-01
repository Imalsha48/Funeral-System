import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./VehicleManagement.css";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      vehicleNumber: "CP-1224",
      model: "Toyota Hiace",
      capacity: 8,
      status: "Available",
    },
    {
      id: 2,
      vehicleNumber: "XYZ-5678",
      model: "Nissan Caravan",
      capacity: 10,
      status: "In Use",
    },
  ]);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <div className="vehicle-management-wrapper">
      
      <div className="vehicle-management-container">
        <h1>Vehicle Management</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search vehicle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="add-btn">Add Vehicle</button>

        <table className="vehicle-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle Number</th>
              <th>Model</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles
              .filter((v) =>
                v.vehicleNumber.toLowerCase().includes(search.toLowerCase())
              )
              .map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.vehicleNumber}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.capacity}</td>
                  <td className={vehicle.status === "Available" ? "available" : "assigned"}>
                    {vehicle.status}
                  </td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="assign-btn">Assign</button>
                    <button className="delete-btn" onClick={() => handleDelete(vehicle.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleManagement;
