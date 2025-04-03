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
            <h2 className="staff-title">Add New Staff</h2>
            <form onSubmit={handleSubmit} className="staff-form">

                <div>
                    <label className="form-label"> Name </label>
                    
                    <input
                        type="text"
                        name="name"
                        placeholder="Insert Name"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

               <div>
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Insert Email"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div> 

                <div>
                    <label className="form-label">Staff ID</label>
                    <input
                        type="text"
                        name="employeeId"
                        placeholder="Employee ID"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        placeholder="DOB"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="form-label">Gender</label>
                    <select
                        name="gender"
                        className="form-select"
                        onChange={handleChange} 
                        required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>

                <div>
                    <label className="form-label">Marital Status</label>
                    <select
                        name="maritalStatus"
                        placeholder="Marital Status"
                        className="form-input"
                        onChange={handleChange} 
                        required>
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                </div>

                <div>
                    <label className="form-label">Designation</label>
                    <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="form-label">Department</label>
                    <select
                        name="department"
                        className="form-select"
                        onChange={handleChange} 
                        required>
                            <option value="">Select Status</option>
                            <option value="staff">Staff</option>
                            <option value="manager">Manager</option>
                            <option value="driver">Driver</option>
                        </select>
                </div>

                <div>
                    <label className="form-label">Salary</label>
                    <input
                        type="number"
                        name="salary"
                        placeholder="Salary"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*******"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

                <div>
                    <label className="form-label">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        placeholder="Upload Image"
                        className="form-input"
                        onChange={handleChange} 
                        required/>
                </div>

                <div className="full-width">
                    <button type="submit" className="staff-button"> Add Staff</button>
                </div>
            </form>
        </div>
    )
}

export default AddStaff