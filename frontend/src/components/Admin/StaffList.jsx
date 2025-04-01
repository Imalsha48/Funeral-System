import React from "react";
import {Link} from "react-router-dom"

const StaffList = () => {
    return(
        <div className="staffList">
            <div className="text-center">
                <h3 className="adminDepLiH3">Manage Staff</h3>
            </div>
        
            <div className="adminDepLiContent">
                <input type="text" 
                placeholders='Search by Dep Name' 
                className="adminDepLiSearch"/>
                        
            <Link to="/admin-dashboard/add-staff" className="adminDepLiAdd">Add New Staff</Link>
            </div>
        </div>
    )
}