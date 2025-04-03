import React from "react";

const AdminSidebar = () => {
    return(
        <div className="aSidebar">
            <div className="as-header">
                <h3 className="as-header">Funeral Management System</h3>
            </div>

            <div className="as-menu">
                <div className="as-items">
                    <span>Dashboard</span>
                </div>

                <div className="as-items">
                    <span>Staff</span>
                </div>

                <div className="as-items">
                    <span>Departments</span>
                </div>

                <div className="as-items">
                    <span>Leaves</span>
                </div>

                <div className="as-items">
                    <span>Salary</span>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar

