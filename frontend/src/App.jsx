import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManagerDashboard from "./pages/ManagerDashboard";
import Inventory from "./pages/Inventory";
import InventoryOrder from "./pages/InventoryOrder";
import Supplier from "./pages/Supplier";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<ManagerDashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<InventoryOrder />} />
          <Route path="/suppliers" element={<Supplier />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;