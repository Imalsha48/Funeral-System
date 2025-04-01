import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";
import AdminSummaryCard from "../components/AdminSummaryCard";

const AdminDashboard = () => {
    return(
        <div className="adminDashboard">
            <AdminSidebar/>
            <div className="adminContent">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminDashboard