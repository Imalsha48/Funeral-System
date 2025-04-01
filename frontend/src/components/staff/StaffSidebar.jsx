import React from "react";
import {NavLink} from 'react-router-dom'
import {FaTachometerAlt, FaUsers, FaBuilding, FaMoneyBillWave} from 'react-icons/fa'

const StaffSidebar = () => {
    return(
        <div className="adminSidebar">
            <div className="adminH3">
                <h3 className="adminSidebarDiv">Funeral Management System</h3>
            </div>
            <div className="adminSidebarDiv2">
                <NavLink to="/staff-dashboard"
                className="adminSidebarIcons">
                    <FaTachometerAlt/>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/staff-dashboard/profile" className="adminSidebarIcons">
                    <FaUsers/>
                    <span>My Profile</span>
                </NavLink>

                <NavLink to="/staff-dashboard/admin-leaves" className="adminSidebarIcons">
                    <FaTachometerAlt/>
                    <span>Leaves</span>
                </NavLink>

                <NavLink to="/staff-dashboard/admin-salary" className="adminSidebarIcons">
                    <FaMoneyBillWave/>
                    <span>Salary</span>
                </NavLink>
            </div>
        </div>
    )
}

export default StaffSidebar