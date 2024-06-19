import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <a className="btn btn-ghost text-xl">Job Dorkar</a>
        <div className="gap-5 font-semibold">
            <Link>Home</Link>
            <Link>My Job</Link>
            <Link>Post Job</Link>
            <Link>LogOut</Link>
            <Link>Login</Link>
            <Link>Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
