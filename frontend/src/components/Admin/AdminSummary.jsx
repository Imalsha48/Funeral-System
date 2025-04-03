import React from "react";

const AdminSummary = () => {
    return(
        <div className="aSummary">
            <h3 className="as-title">Dashboard Overview</h3>
            
            <div className="as-row">
                <div className="as-item">
                        <p>Total Employees</p>
                        <p className="as-value">13</p>
                </div>

                <div className="as-item">
                    <p>Total Departments</p>
                    <p className="as-value">3</p>
                </div>
            </div>
            
            <div className="as-row">
                <div className="as-item">
                    <p>Leave Applied</p>
                    <p className="as-value">5</p>
                    
                </div>
                
                <div className="as-item">
                    <p>Leave Approved</p>
                    <p className="as-value">2</p>
                </div>
            </div>
            
            <div className="as-row">
                <div className="as-item">
                    <p>Leave Pending</p>
                    <p className="as-value">4</p>
                </div>
                
                <div className="as-item">
                    <p>Leave Rejected</p>
                    <p className="as-value">1</p>
                </div>
            </div>
        </div>
    )
}

export default AdminSummary