import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayout from './components/DashboardLayout';
import LoginPage from './components/LoginPage';
import DashboardHomePage from './components/DashboardHomePage';
import UsersPage from './components/UsersPage';
import ReportsPage from './components/ReportsPage';
import ShowUser from './components/ShowUser';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHomePage />} />
          <Route path="users" element={<UsersPage />}/>
          <Route path="users/:id" element={<ShowUser />}/>
          <Route path="reports" element={<ReportsPage />} />
        </Route>
        {/* For any other route that is not declared here, show this component */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <LoginPage/> */}
      {/* <DashboardLayout/> */}
    </>
  );
}

export default App;
