import React from "react";
import {NavLink} from 'react-router-dom'
import {FaTachometerAlt} from 'react-icons/fa'

const AdminSidebar = () => {
    return(
        <div className="adminSidebar">
            <div className="adminSidebarH3">
                <h3 className="adminSidebarDiv">Funeral Management System</h3>
            </div>
            <div className="adminSidebarDiv2">
                <NavLink to="/admin-dashboard"
                className="adminSidebarIcons">
                    <FaTachometerAlt/>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/admin-dashboard" className="adminSidebarIcons">
                    <FaUsers/>
                    <span>Staff</span>
                </NavLink>

                <NavLink to="/admin-dashboard/departments" className="adminSidebarIcons">
                    <FaBuilding/>
                    <span>Departments</span>
                </NavLink>

                <NavLink to="/admin-dashboard" className="adminSidebarIcons">
                    <FaTachometerAlt/>
                    <span>Leaves</span>
                </NavLink>

                <NavLink to="/admin-dashboard" className="adminSidebarIcons">
                    <FaMoneyBillWave/>
                    <span>Salary</span>
                </NavLink>
            </div>
        </div>
    )
}

export default AdminSidebar