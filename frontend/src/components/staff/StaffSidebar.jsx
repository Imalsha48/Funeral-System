import React from "react";

const StaffSidebar = () => {
    return(
        <div className="adminSidebar">
            <div className="adminH3">
                <h3 className="adminSidebarDiv">Funeral Management System</h3>
            </div>
            <div className="adminSidebarDiv2">
            <div className="adminSidebarIcons">
                <span>Dashboard</span>
            </div>

            <div className="adminSidebarIcons">
                    <span>My Profile</span>
            </div>

            <div className="adminSidebarIcons">
                    <span>Leaves</span>
            </div>

            <div className="adminSidebarIcons">
                    <span>Salary</span>
            </div>

            </div>
        </div>
    )
}

export default StaffSidebar;