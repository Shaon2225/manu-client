import autoprefixer from "autoprefixer";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-black sticky top-0 z-50	">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            <li className="font-semibold text-success"><Link to={'/blogs'}>Blog</Link></li>
            <li>
            {user && <Link to={'/dashboard'} className="font-semibold text-success">Dashborad</Link>}
          </li>
          <li>
            {!user && <Link to={'/login'} className="font-semibold text-success ">Log in</Link>}
          </li>
          <li>
            {user?<span className="font-semibold text-success" onClick={()=>signOut(auth)}>Sign Out</span>:<Link to={'/signup'} className="font-semibold text-success">Sign Up</Link>}
          </li>
          </ul>
        </div>
        <Link to={'/'} className="ml-5"><img className="lg:block" src="https://i.ibb.co/BfvPVXL/voltlab-lab-logo.png" alt="" /></Link>
      </div>
      
      <div className="navbar-center hidden lg:flex justify-end pr-10 w-full">
        
        <ul className="menu menu-horizontal p-0">
          <li className="font-semibold text-success  ml-5"><Link to={'/'}>Home</Link></li>
          <li className="font-semibold text-success"><Link to={'/blogs'}>Blog</Link></li>
          <li>
            {user && <Link to={'/dashboard'} className="font-semibold text-success  ml-5">Dashborad</Link>}
          </li>
          <li>
            {!user && <Link to={'/login'} className="font-semibold text-success  ml-5">Log in</Link>}
          </li>
          <li>
            {user?<span className="font-semibold text-success ml-5" onClick={()=>signOut(auth)}>Sign Out</span>:<Link to={'/signup'} className="font-semibold text-success ml-5">Sign Up</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
