import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'

const Dashboard = () => {

  const [user]=useAuthState(auth);

  const userUrl = `https://fathomless-woodland-51722.herokuapp.com/userprofile/${user.email}`;
  
  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery(["userProfile",user], () =>
    fetch(userUrl)
    .then((res) =>res.json())
  );

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="drawer">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <div className="flex items-center">
    <label htmlFor="dashboard-drawer" className="text-black font-bold mt-24"><span className='border-2 shadow-lg rounded-r-lg p-2 mt-10 sm:mt-5 text-2xl fixed z-20'>&gt;</span> </label>
    </div>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      
      <li><Link to={'/dashboard'} className="text-secondary font-semibold">Profile</Link></li>
      {!(userProfile?.role=='admin')&&<li><Link to={'/dashboard/myreview'} className="text-secondary font-semibold">Review</Link></li>}
      {!(userProfile?.role=='admin')&&<li><Link to={'/dashboard/myorders'} className="text-secondary font-semibold">My Orders</Link></li>}
      {(userProfile?.role=='admin')&&<li><Link to={'/dashboard/allusers'} className="text-secondary font-semibold">All users</Link></li>}
      {(userProfile?.role=='admin')&&<li><Link to={'/dashboard/addproduct'} className="text-secondary font-semibold">Add products</Link></li>}
      {(userProfile?.role=='admin')&&<li><Link to={'/dashboard/allproduct'} className="text-secondary font-semibold">Mange product products</Link></li>}
      
    </ul>
  </div>
</div>
  )
}

export default Dashboard