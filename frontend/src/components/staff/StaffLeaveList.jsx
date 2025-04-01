import React from "react";
import {Link} from "react-router-dom"
const StaffLeaveList = () => {
    return(
        <div>
            <div className="staffList">
                        <div className="text-center">
                            <h3 className="adminDepLiH3">Manage Leaves</h3>
                        </div>
                    
                        <div className="adminDepLiContent">
                            <input type="text" 
                            placeholders='Search by Dep Name' 
                            className="adminDepLiSearch"/>
                                    
                        <Link to="/staff-dashboard/add-leave" className="adminDepLiAdd">Add New Leave</Link>
                        </div>
                    </div>
        </div>
    )
}