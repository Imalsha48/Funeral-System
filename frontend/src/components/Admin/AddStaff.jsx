import React, {useState} from "react";

const AddStaff = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        employeeId: "",
        dob: "",
        gender: "",
        maritalStatus: "",
        designation: "",
        department: "",
        salary: "",
        password: "",
        image: null
    })

    const handleChange = (e) => {
        const {name, value, files} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Staff Added:", formData);
    }

    return(
        <div className="addStaff">
            <h2 className="addH2">Add New Staff</h2>
            <form onSubmit={handleSubmit}>
                <div className="addStaffContent">{/*Name*/}</div>

                <div>
                    <label className="adminLabel2"> Name </label>
                    
                    <input
                        type="text"
                        name="name"
                        placeholder="Insert Name"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

               <div>
                    <label className="adminLabel2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Insert Email"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div> 

                <div>
                    <label className="adminLabel2">Staff ID</label>
                    <input
                        type="text"
                        name="employeeId"
                        placeholder="Employee ID"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="adminLabel2">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        placeholder="DOB"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="adminLabel2">Gender</label>
                    <select
                        name="gender"
                        className="adminInput"
                        onChange={handleChange} 
                        required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>

                <div>
                    <label className="adminLabel2">Marital Status</label>
                    <select
                        name="maritalStatus"
                        placeholder="Marital Status"
                        className="adminInput"
                        onChange={handleChange} 
                        required>
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                </div>

                <div>
                    <label className="adminLabel2">Designation</label>
                    <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="adminLabel2">Department</label>
                    <select
                        name="department"
                        className="adminInput"
                        onChange={handleChange} 
                        required>
                            <option value="">Select Status</option>
                            <option value="staff">Staff</option>
                            <option value="manager">Manager</option>
                            <option value="driver">Driver</option>
                        </select>
                </div>

                <div>
                    <label className="adminLabel2">Salary</label>
                    <input
                        type="number"
                        name="salary"
                        placeholder="Salary"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="adminLabel2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*******"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="adminLabel2">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        placeholder="Upload Image"
                        className="adminInput"
                        onChange={handleChange} 
                        required/>
                </div>

                <button type="submit" className="addStaffBtn"> Add Employee</button>
            </form>
        </div>
    )
}

export default AddStaff