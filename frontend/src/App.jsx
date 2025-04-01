import { BrowseRoute, Routes, Route, Navigate} from 'react-router-dom'
import AdminDashboard from './pages/Admin Dashboard'
import AdminSummaryCard from './components/AdminSummaryCard'
import AdminDepartmentList from './components/AdminDepartmentList'

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

        <Route path="/admin-dashboard/departments" element={<AdminDepartmentList/>}></Route>
      </Route>

      <Route path="/staff-dasboard" element={<StaffDashboard/>}></Route>
    </Routes>
    </BrowseRoute>
  )
}

export default App
