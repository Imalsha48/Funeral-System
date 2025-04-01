import React, { useState } from "react";

const AdminAddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name:'',
        description:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDepartment({...department,[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Department Added:", department);
    }

    return(
        <div className="adminAddDepartment">
            <h2 className="adminH2">Add Department</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="dep_name" className="adminAddDepLabel1">Department Name</label>
                    <input 
                        type="text"
                        name="dep_name" 
                        placeholder="Enter Dep Name" 
                        className="adminInput" 
                        onChange={handleChange}/>
                </div>
                    
                <div className="adminAddDepContent">
                    <label htmlFor="description" className="adminLabel2">Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        className="adminInput" 
                        rows="4" 
                        onChange={handleChange}>
                    </textarea>
                </div>

                <button type="submit" className="adminAddDepSubmit">Add Department</button>
            </form>
        </div>
    )
} 
export default AdminAddDepartment
