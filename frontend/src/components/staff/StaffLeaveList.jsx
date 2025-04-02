import React from "react";

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
                                    
                        <button className="adminDepLiAdd">Add New Leave</button>
                    </div>
                </div>
        </div>
    )
}

export default StaffLeaveList