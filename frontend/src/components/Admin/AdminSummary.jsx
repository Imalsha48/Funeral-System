import React from "react";
import AdminSummaryCard from "./AdminSummaryCard";
import {FaUsers, FaBuilding, FaFileAlt, FaCheckCirle, FaHourglassHalf} from 'react-icons/fa';

const AdminSummary = () => {
    return(
        <div className="adminSummary">
            <h3 className="adminSummaryH3">Dashboard Overview</h3>
            
            <div className="adminSummaryDiv">
                <AdminSummaryCard icon={<FaUsers/>} text="Total Employees" number={13}/>
                <AdminSummaryCard icon={<FaBuilding/>} text="Total Departments" number={3}/>
            </div>
            
            <div>
                <AdminSummaryCard icon={<FaFileAlt/>} text="Leave Applied" number={5}/>
                <AdminSummaryCard icon={<FaCheckCirle/>} text="Leave Approved" number={2}/>
                <AdminSummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number={4}/>
                <AdminSummaryCard icon={<FaCheckCircle/>} text="Leave Rejected" number={1}/>
            </div>
        </div>
    )
}

export default AdminSummary