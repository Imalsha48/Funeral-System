import React from 'react'
import './Supplier.css' 
import ManagerHeaderContent from '../components/ManagerHeaderContent/ManagerHeaderContent'

function Supplier() {
  
  const suppliers = [
    { supplierId: 1001, name: "Saman Ranasinghe", contact: "077-0786543", email: "contact@casketmfg.com", supitem: "Casckets" },
    { supplierId: 1002, name: "Rend Flower Shop", contact: "071-8796678", email: "orders@flowershopinc.com", supitem: "Flowers" },
    { supplierId: 1003, name: "Funeral Supplies pvt Ltd", contact: "075-7896732", email: "sales@memorialsupplies.com", supitem: "Gloves" },
    
  ];
  
  const handleDelete = (id) => {
    console.log(`Delete supplier with ID: ${id}`);
  };
  
  const handleSearch = () => {
    console.log("Search button clicked");
  };
  
  const handleAddSupplier = () => {
    console.log("Add supplier button clicked");
  };
  
  return (
    <>
    <ManagerHeaderContent/>
    <div>
      <header className="suppliers-header">
        <h1>Supplier Details</h1>
      </header>

      {/* Search and Add Supplier Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', alignItems: 'center' }}>
        {/* Search bar and button - left side */}
        <div style={{ display: 'flex', gap: '10px',marginLeft: '30px' }}>
          <input 
            type="text" 
            placeholder="Search supplier by ID..." 
            style={{color: 'white', padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
          />
          <button 
            onClick={handleSearch}
            style={{ 
              backgroundColor: '#1e3a5f', 
              color: 'white', 
              padding: '8px 16px', 
              borderRadius: '4px', 
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>
        
        {/* Add Supplier button - right side */}
        <button 
          onClick={handleAddSupplier}
          style={{ 
            backgroundColor: '#1e3a5f', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'medium',
            marginRight:'30px'
          }}
        >
          Add Supplier
        </button>
      </div>

      {/* Suppliers Table */}
      <div className="suppliers-table-container">
        <table>
          <thead>
            <tr>
              <th>Supplier ID</th>
              <th>Supplier Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Item</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.supplierId}>
                <td>{supplier.supplierId}</td>
                <td>{supplier.name}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.email}</td>
                <td>{supplier.supitem}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(supplier.supplierId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Supplier