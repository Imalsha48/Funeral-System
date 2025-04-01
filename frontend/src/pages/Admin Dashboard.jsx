import React from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminNavbar from "../components/Admin/AdminNavbar";
import AdminSummaryCard from "../components/Admin/AdminSummaryCard";
import {Outlet} from 'react-router-dom';

const AdminDashboard = () => {
    return(
        <div className="adminDashboard">
            <AdminSidebar/>
            <div className="adminContent">
                <AdminNavbar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminDashboard