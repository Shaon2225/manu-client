import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-black">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            <li>
            <Link to={'/login'} className="font-semibold text-success">Log in</Link>
          </li>
          <li>
            <Link to={'/signup'} className="font-semibold text-success">Sign Up</Link>
          </li>
          </ul>
        </div>
        <Link to={'/'} class="ml-5 normal-case text-xl"><img src="img/voltlab_lab_logo.png" alt="" /></Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to={'/login'} className="font-semibold text-success ">Log in</Link>
          </li>
          <li>
            <Link to={'/signup'} className="font-semibold text-success">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
