import React from "react";
import StaffSidebar from '../components/staff/StaffSidebar'
import StaffNavbar from "../components/Staff/StaffNavbar";
import StaffSummary from "../components/staff/StaffSummary";

const StaffDashboard = () => {
    return(
        <div className="dashboard">
            <StaffSidebar/>
            <div className="content">
                <StaffNavbar/>
                <StaffSummary/>
            </div>
        </div>
    )
}

export default StaffDashboard