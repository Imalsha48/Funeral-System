import React from 'react'
import './ManagerHeaderContent.css'

function ManagerHeaderContent() {
  return (
    <div id ="manheadercontent">
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex-1">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Stock</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Orders</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Suppliers</a></li>
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