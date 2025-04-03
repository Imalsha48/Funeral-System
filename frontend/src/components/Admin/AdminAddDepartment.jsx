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
        <div className="">
            <h2 className="">Add Department</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="dep_name" className="">Department Name</label>
                    <input 
                        type="text"
                        name="dep_name" 
                        placeholder="Enter Dep Name" 
                        className="adminInput" 
                        onChange={handleChange}/>
                </div>
                    
                <div className="">
                    <label htmlFor="description" className="">Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        className="adminInput" 
                        rows="4" 
                        onChange={handleChange}>
                    </textarea>
                </div>

                <button type="submit" className="">Add Department</button>
            </form>
        </div>
    )
} 
export default AdminAddDepartment
