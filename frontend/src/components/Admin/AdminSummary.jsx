import React from "react";

const AdminSummary = () => {
    return(
        <div className="adminSummary">
            <h3 className="adminSummaryH3">Dashboard Overview</h3>
            
            <div className="adminSummaryDiv">
                <div className="adminSummaryItem">
                        <p>Total Employees</p>
                        <p>13</p>
                </div>

                <div className="adminSummaryItem">
                    <p>Total Departments</p>
                    <p>3</p>
                </div>
            </div>
            
            <div>
                <div className="adminSummaryItem">
                    <p>Leave Applied</p>
                    <p>5</p>
                </div>
                
                <div className="adminSummaryItem">
                    <p>Leave Approved</p>
                    <p>2</p>
                </div>
                
                <div className="adminSummaryItem">
                    <p>Leave Pending</p>
                    <p>4</p>
                </div>
                
                <div className="adminSummaryItem">
                    <p>Leave Rejected</p>
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}

export default AdminSummary