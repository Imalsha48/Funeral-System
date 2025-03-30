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
  
  return (
    <>
    <ManagerHeaderContent/>
    <div>
      <header className="orders-header">
        <h1>Orders</h1>
      </header>

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
    </div>
    </>
  )
}

export default InventoryOrder