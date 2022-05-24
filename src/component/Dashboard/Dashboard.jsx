import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div class="drawer">
  <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="dashboard-drawer" class="text-black font-bold mt-10"><span className='border-2 border-indigo-600 rounded-r-lg p-2 mt-10 text-2xl'>&gt;</span> </label>
    <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="dashboard-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      
      <li><Link to={'/dashboard'} className="text-secondary font-semibold">Profile</Link></li>
      <li><Link to={'/dashboard/myreview'} className="text-secondary font-semibold">My Review</Link></li>
      
    </ul>
  </div>
</div>
  )
}

export default Dashboard