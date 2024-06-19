import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();

    // Validate password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Check if all fields are filled
    if (name && email && password) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setError("All fields are required");
    }
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
              <h1 className="text-3xl mb-4">Register</h1>
              <form action="">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="email p-3 m-2 shadow-lg rounded-2xl w-[80%] hover:bg-slate-300"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2 shadow-lg rounded-2xl w-[80%] hover:bg-slate-300"
                  type="email"
                  placeholder="enter your email"
                />
                <br />
                <div className="pass-container">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-3 m-2 shadow-lg rounded-2xl w-[80%] hover:bg-slate-300"
                    type="password"
                    placeholder="type your password"
                  />
                  {/* <input
                    className="password p-3 m-2"
                    type="password"
                    placeholder="enter your password"
                  /> */}
                  {/* <button>toggle</button> */}
                </div>
                <button
                  onClick={handleRegistration}
                  className="btn btn-info w-[20%] p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? login here..
                  </small>
                </p>
              </form>
              {error && <p>{error}</p>}
              <SocialLoginBtn></SocialLoginBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
