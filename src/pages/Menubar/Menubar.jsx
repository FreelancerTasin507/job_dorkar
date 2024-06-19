import React from "react";

const Menubar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">Job Dorkar</a>
        <div>
            <div>Home</div>
            <div>My Job</div>
            <div>Post Job</div>
            <div>LogOut</div>
            <div>Login</div>
            <div>Registration</div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
