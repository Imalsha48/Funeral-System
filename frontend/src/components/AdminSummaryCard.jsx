import React from "react";

const AdminSummaryCard = ({icon, text, number}) => {
    return(
        <div>
            <div>
                {icon}
            </div>

            <div>
                <p>{text}</p>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default AdminSummaryCard