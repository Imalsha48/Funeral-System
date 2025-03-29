import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ManagerHeaderContent from './components/ManagerHeaderContent/ManagerHeaderContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ManagerHeaderContent/>
  </StrictMode>,
)
