import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
 
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin]=useAdmin(user)
  return (
    <div class="drawer drawer-mobile z-0 drawer-end">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-center text-3xl font-bold mt-10 text-red-300">
          Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-purple-300  text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-white  ">
            <Link to="/dashboard"> My Appointment</Link>
          </li>
          <li className="text-white  ">
            <Link to="/dashboard/reviwe">My Reviwe</Link>
          </li>
          <li className="text-white  ">
            <Link to="/dashboard/history">My History</Link>
          </li>
        { admin &&  <li className="text-white  ">
            <Link to="/dashboard/users">All Users</Link>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
