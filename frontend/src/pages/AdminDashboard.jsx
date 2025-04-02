import React from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AdminSummary from "../components/Admin/AdminSummary";

const AdminDashboard = () => {
    return(
        <div className="adminDashboard">
            <AdminSidebar/>
            <div className="adminContent">
                <AdminNavbar/>
                <AdminSummary/>
            </div>
        </div>
    )
}

export default AdminDashboard