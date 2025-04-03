import React from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AdminSummary from "../components/Admin/AdminSummary"


const AdminDashboard = () => {
    return(
        <div className="dashboard">
            <AdminSidebar/>
            <div className="adminContent">
                <AdminNavbar/>
                <div className="summary-container">
                    <AdminSummary/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard