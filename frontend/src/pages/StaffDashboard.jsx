import React from "react";
import StaffSidebar from './components/staff/StaffSidebar'
import {Outlet} from 'react-router-dom'
import StaffNavbar from "../components/Staff/StaffNavbar";

const StaffDashboard = () => {
    return(
        <div className="dashboard">
            <StaffSidebar/>
            <div className="content">
                <StaffNavbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default StaffDashboard