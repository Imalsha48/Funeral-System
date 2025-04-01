import { BrowseRoute, Routes, Route, Navigate} from 'react-router-dom'
import AdminDashboard from './pages/Admin Dashboard'
import AdminSummaryCard from './components/Admin/AdminSummaryCard'
import AdminDepartmentList from './components/Admin/AdminDepartmentList'
import StaffDashboard from "./pages/StaffDashboard"
import AdminSummary from "./components/AdminSummary"
import AdminAddDepartment from "./components/Admin/AdminAddDepartment"
import StaffList from "./components/Admin/AddStaff"
import StaffList from "./components/Admin/StaffList"
import StaffSummary from "./components/staff/StaffSummary"
import StaffLeaveList from "./components/staff/StaffLeaveList"
import StaffAddLeave from "./components/staff/StaffAddLeave"

const App = () => {
  return (
    <BrowseRoute>
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin-dashboard" element={
        <privateRoutes>
          <RoleBaseRoutes requiredRole={["admin"]}>
            <AdminDashboard/>
          </RoleBaseRoutes>
        </privateRoutes>
      }>
        <Route index element={<AdminSummary/>}></Route>

        <Route path="/admin-dashboard/admin-departments" element={<AdminDepartmentList/>}></Route>
        <Route path="/admin-dashboard/admin-add-department" element={<AdminAddDepartment/>}></Route>

        <Route path="/admin-dashboard/admin-staff" element={<StaffList/>}></Route>
        <Route path="/admin-dashboard/add-staff" element={<AdminStaff/>}></Route>
      </Route>

      <Route path="/staff-dasboard" element={
        <privateRoutes>
          <RoleBasedRoutes requiredRole={["admin", "Staff"]} >
            <StaffDashboard/>
          </RoleBasedRoutes>
        </privateRoutes>
      }
      >
        <Route index element={<StaffSummary/>}></Route>

        <Route path="/staff-dashboard/profile"></Route>
        <Route path="/staff-dashboard/leaves" element={<StaffLeaveList/>}></Route>
        <Route path="/staff-dashboard/add-leave" element={<StaffLeaveList/>}></Route>
     </Route>
    </Routes>
    </BrowseRoute>
  )
}

export default App
