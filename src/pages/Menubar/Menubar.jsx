import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="px-3 py-1">
      <div className="navbar bg-base-100">
        <div className="justify-start w-[70%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-5 font-semibold pr-5 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>
              <Link to="/MyJobs">My Job</Link>
              <Link to="/AddJob">Post Job</Link>
              {user?.email ? (
                <li className="hover:cursor-pointer">
                  <>LogOut</>
                </li>
              ) : (
                <Link to="/Login">Login</Link>
              )}
              <Link to="/Register">Registration</Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-bold">Job Dorkar</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 font-semibold pr-5">
            <Link to="/">Home</Link>
            <Link to="/MyJobs">My Job</Link>
            <Link to="/AddJob">Post Job</Link>
            {user?.email ? (
              <li onClick={handleLogout} className="hover:cursor-pointer">
                <>LogOut</>
              </li>
            ) : (
              <Link to="/Login">Login</Link>
            )}
            <Link to="/Register">Registration</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
