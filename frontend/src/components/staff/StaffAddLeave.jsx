import React from "react";

const StaffAddLeave = () => {
    const handleChange = (e) => {}

    return(
        <div className="addStaff"> 
            <h2> Request For Leave</h2>
            <form>
                <div className="addStaffContent">
                    <div>
                        <label className="adminLabel2">Leave Type</label>
                        <select
                            name="leaveType"
                            onChange={handleChange}
                            className="adminInput"
                            required>
                                <option value="">Select Department</option>
                                <option value="sick leave">Sick Leave</option>
                                <option value="casual leave">Casual Leave</option>
                                <option value="annual leave">Annual Leave</option>
                        </select>
                    </div>

                    <div className="addStaffContent">
                        <lable className="adminLabel2">From Date</lable>
                        <input
                           type="date"
                           name="startDate"
                           onChange={handleChange}
                           className="adminInput"
                           required/>
                    </div>

                    <div className="addStaffContent">
                        <lable className="adminLabel2">To Date</lable>
                        <input
                           type="date"
                           name="endDate"
                           onChange={handleChange}
                           className="adminInput"
                           required/>
                    </div>

                    <div className="addStaffContent">
                        <lable className="adminLabel2">Description</lable>
                        <textArea
                           type="reason"
                           name="Reason"
                           onChange={handleChange}
                           className="adminInput"
                           required/>
                    </div>

                    <button type="submit" className="addStaffBtn">Submit</button>
                </div>
            </form>
        </div>
    )
}