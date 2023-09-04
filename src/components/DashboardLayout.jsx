import { useEffect } from "react";
import { Link, Navigate, Outlet, NavLink, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const isLoggedIn = true;
    useEffect(() => {
        if (!isLoggedIn) {
             navigate("/");
        }        
    },[]);
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <aside
        style={{
          width: "10rem",
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <nav>
          <ol style={{ listStyle: "none" }}>
            {/* <li><Link to="/dashboard/home">Home</Link></li>
            <li><Link to="/dashboard/users">Users</Link></li>
            <li><Link to="/dashboard/reports">Reports</Link></li> */}
            <li>
              <NavLink to="/dashboard/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reports">Reports</NavLink>
            </li>
          </ol>
        </nav>
      </aside>
      <main
        style={{
          flexGrow: 1,
        }}
      >
        {/* {isLoggedIn && <Outlet />}
              
              {!isLoggedIn && <Navigate to={"/" } replace={true} />} */}

        <Outlet />
      </main>
    </div>
  );
}
export default DashboardLayout