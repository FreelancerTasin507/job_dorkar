/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";

import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  // const history = useHistory();
  let navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";






  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setSuccess("User logged in successfully");
    } catch (err) {
      setError(err.message);
    }
    navigate(from, { replace: true });
  };
  return (
    <div className="mt-20">
      <div className="container">
        <div className="md:flex">
          <div className="md:w-[50%]">
            <img
              className="w-100"
              src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
              alt=""
            />
          </div>
          <div className="md:w-[50%]">
            <div className="border shadow-2xl px-5 py-16 rounded-3xl flex flex-col mx-auto text-center">
              <h1 className="text-3xl mb-4">Login</h1>
              <form action="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2 shadow-lg rounded-2xl w-[80%] hover:bg-slate-300"
                  type="email"
                  placeholder="enter your email"
                />
                <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 m-2 shadow-lg rounded-2xl w-[80%] hover:bg-slate-300"
                  type="password"
                  placeholder="enter your password"
                  autoComplete="current-password"
                />
                <br />
                <button
                  onClick={handleLogin}
                  className="btn btn-info w-[20%] p-2 mt-3"
                >
                  Login
                </button>
                <p className="p-2">
                  <small className="text-info">
                    are you new? <Link to="/register">register here</Link>
                  </small>
                </p>
              </form>
              {error && <p className="text-red-700 font-bold">{error}</p>}
              {success && <p className="text-green-600 font-bold">{success}</p>}
              <SocialLoginBtn></SocialLoginBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
