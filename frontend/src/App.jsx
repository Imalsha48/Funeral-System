import AdminDashboard from './pages/AdminDashboard';
import AdminDepartmentList from './components/Admin/AdminDepartmentList';
import StaffDashboard from "./pages/StaffDashboard";
import AdminSummary from "./components/Admin/AdminSummary";
import AdminAddDepartment from "./components/Admin/AdminAddDepartment";
import StaffList from "./components/Admin/StaffList";
import AddStaff from "./components/Admin/AddStaff";
import StaffSummary from "./components/staff/StaffSummary";
import StaffLeaveList from "./components/staff/StaffLeaveList";
import StaffAddLeave from "./components/staff/StaffAddLeave";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "../src/App.css"

const App = () => {
  return (    
    <div>
      <BrowserRouter>
      <Routes>
        <Route 
        path="/"
        element={<AdminDashboard/>}
        />

        <Route path='/AddStaff'
        element={<AddStaff/>}/>

        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
