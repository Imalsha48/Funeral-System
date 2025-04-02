import React, {useState} from "react";

const AdminDepartmentList = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        console.log("Searching for:", e.target.value)
    }

    return(
        <div className="adminDepartmentList">
            <div className="text-center">
                <h3 className="adminH3">Manage Departments</h3>
            </div>

            <div className="adminDepLiContent">
                <input type="text" 
                placeholders='Search by Dep Name' 
                className="adminDepLiSearch"
                value={searchTerm}
                onChange={handleSearchChange}/>
                
                <button className="adminDepLiAdd">
                    Add New Department
                </button>
            </div>
        </div>
        
    )
}

export default AdminDepartmentList
