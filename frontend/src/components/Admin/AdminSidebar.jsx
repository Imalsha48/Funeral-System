import React from "react";

const AdminSidebar = () => {
    return(
        <div className="adminSidebar">
            <div className="adminH3">
                <h3 className="adminSidebarDiv">Funeral Management System</h3>
            </div>

            <div className="adminSidebarDiv2">
                <div className="adminSidebarItem">
                    <span>Dashboard</span>
                </div>

                <div className="adminSidebarItem">
                    <span>Staff</span>
                </div>

                <div className="adminSidebarItem">
                    <span>Departments</span>
                </div>

                <div className="adminSidebarItem">
                    <span>Leaves</span>
                </div>

                <div className="adminSidebarItem">
                    <span>Salary</span>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar