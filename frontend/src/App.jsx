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

const App = () => {
  return (
    <div>
      <div>
        <AdminDashboard>
          <AdminSummary/>
          <AdminDepartmentList/>
          <AdminAddDepartment/>
          <StaffList/>
          <AddStaff/>
        </AdminDashboard>

        <StaffDashboard>
          <StaffSummary/>
          <StaffLeaveList/>
          <StaffAddLeave/>
        </StaffDashboard>
      
      </div>
    </div>
  )
}

export default App
