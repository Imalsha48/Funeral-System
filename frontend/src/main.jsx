import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import ManagerDashboard from './pages/ManagerDashboard.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <ManagerDashboard/>
    
    

  </StrictMode>
)
