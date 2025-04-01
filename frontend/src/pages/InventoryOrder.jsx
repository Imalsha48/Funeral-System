import React from 'react'
import './InventoryOrder.css' 
import ManagerHeaderContent from '../components/ManagerHeaderContent/ManagerHeaderContent'

function InventoryOrder() {
 
  const orders = [
    { inorderId: 1, supplier: "Supplier Co", item: "Casket Type A ",quantity:"5", orderDate: "2025-03-15", status: "Delivered" },
    { inorderId: 2, supplier: "Flower Shop", item: "Floral Arrangement ", quantity:"10",orderDate: "2025-03-20", status: "Processing" },
    { inorderId: 3, supplier: "Memorial Supplies", item: "Memorial Cards ",quantity:"100", orderDate: "2025-03-25", status: "Pending" },
    
  ];
  
  const handleDelete = (id) => {
    console.log(`Delete order with ID: ${id}`);
  };
  
  const handleAddOrder = () => {
    console.log("Add new order clicked");
  };
  
  const handleSearch = () => {
    console.log("Search button clicked");
  };
  
  return (
    <>
    <ManagerHeaderContent/>
    <div>
      <header className="orders-header">
        <h1>Orders</h1>
      </header>

      {/* Search and Add Order Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', alignItems: 'center' }}>
        {/* Search bar and button - left side */}
        <div style={{ display: 'flex', gap: '10px',marginLeft: '150px' }}>
          <input 
            type="text" 
            placeholder="Search order by ID..." 
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
        
        {/* Add Order button - right side */}
        <button 
          onClick={handleAddOrder}
          style={{ 
            backgroundColor: '#1e3a5f', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'medium',
            marginRight:'150px'
          }}
        >
          Add Order
        </button>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Supplier</th>
              <th>Items Ordered</th>
              <th>Quantity</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.inorderId}>
                <td>{order.inorderId}</td>
                <td>{order.supplier}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(order.inorderId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="report-button-container fixed bottom-7 right-7">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Generate Report
        </button>
      </div>
    </div>
    </>
  )
}

export default InventoryOrder