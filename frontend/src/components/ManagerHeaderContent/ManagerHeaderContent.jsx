import React from 'react'
import { Link } from 'react-router-dom'
import './ManagerHeaderContent.css'

function ManagerHeaderContent() {
  return (
    <div id="manheadercontent">
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow">

        <div className="flex-1">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-white hover:text-blue-600 font-medium">Dashboard</Link></li>
            <li><Link to="/inventory" className="text-white hover:text-blue-600 font-medium">Stock</Link></li>
            <li><Link to="/orders" className="text-white hover:text-blue-600 font-medium">Orders</Link></li>
            <li><Link to="/suppliers" className="text-white hover:text-blue-600 font-medium">Suppliers</Link></li>
          </ul>
        </div>
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default ManagerHeaderContent