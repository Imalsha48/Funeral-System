import React from 'react'
import './Inventory.css'
import ManagerHeaderContent from '../components/ManagerHeaderContent/ManagerHeaderContent'

function Inventory() {
    const inventoryItems = [
        { itemId: 1, itemName: "Casket Type A", quantity: 5, supplier: "Supplier Co", lastUpdated: "2025-03-25" },
        { itemId: 2, itemName: "Floral Arrangement", quantity: 12, supplier: "Flower Shop", lastUpdated: "2025-03-28" },
        { itemId: 3, itemName: "Hearse Vehicle", quantity: 5, supplier: "Car Rentals Ltd.", lastUpdated: "2025-03-23" },
        { itemId: 4, itemName: "Body Preparation Kit", quantity: 15, supplier: "Medical Suppliers", lastUpdated: "2025-03-24" },
        { itemId: 5, itemName: "Casket", quantity: 10, supplier: "ABC Supplies", lastUpdated: "2025-03-20" },
        { itemId: 6, itemName: "Floral Arrangements", quantity: 25, supplier: "XYZ Florists", lastUpdated: "2025-03-22" },
        { itemId: 7, itemName: "Hearse Vehicle", quantity: 5, supplier: "Car Rentals Ltd.", lastUpdated: "2025-03-23" },
        { itemId: 8, itemName: "Body Preparation Kit", quantity: 15, supplier: "Medical Suppliers", lastUpdated: "2025-03-24" },
        { itemId: 9, itemName: "Casket", quantity: 10, supplier: "ABC Supplies", lastUpdated: "2025-03-20" },
      ];
    
      const handleDelete = (id) => {
        console.log(`Delete item with ID: ${id}`);
      };

      const handleSearch = () => {
        console.log("Search button clicked");
      };
      
      const handleAddItem = () => {
        console.log("Add item button clicked");
      };

  return (
    <>
    <ManagerHeaderContent/>
    <div>
      <header className="inventory-header">
        <h1>Stock</h1>
      </header>

      {/* Search and Add Item Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', alignItems: 'center' }}>
        {/* Search bar and button - left side */}
        <div style={{ display: 'flex', gap: '10px' ,marginLeft: '150px'}}>
          <input 
            type="text" 
            placeholder="Search item by ID..." 
            style={{ color: 'white',padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
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
        
        {/* Add Item button - right side */}
        <button 
          onClick={handleAddItem}
          style={{ 
            backgroundColor: '#1e3a5f', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'medium',
            marginRight:'150px',
          }}
        >
          Add Item
        </button>
      </div>

      {/* Inventory Table */}
      <div className="inventory-table-container">
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.itemId}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.supplier}</td>
                <td>{item.lastUpdated}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(item.itemId)}>Delete</button>
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

export default Inventory