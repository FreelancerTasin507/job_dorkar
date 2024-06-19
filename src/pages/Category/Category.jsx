import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaPhoenixFramework } from "react-icons/fa";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";

const Category = () => {
  return (
    <div>
      <h1 className="text-center p-5 text-4xl font-bold mb-20">Category</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2  ml-5 md:ml-0 justify-evenly gap-7">
        <div className="card md:w-96 w-40 bg-slate-300 ">
          <div className="card-body mx-auto">
            <HiStatusOffline color="green" fontSize="4em" />
            <h2 className="card-title">Offline</h2>
          </div>
        </div>
        <div className="card md:w-96 w-40 bg-slate-300 ">
          <div className="card-body mx-auto">
            <HiStatusOnline color="green" fontSize="4em" />
            <h2 className="card-title">Remote</h2>
          </div>
        </div>
        <div className="card md:w-96 w-40 bg-slate-300 ">
          <div className="card-body mx-auto">
            <FaPhoenixFramework color="green" fontSize="4em" />
            <h2 className="card-title">Part Time</h2>
          </div>
        </div>
        <div className="card md:w-96 w-40 bg-slate-300 ">
          <div className="card-body mx-auto">
            <BsPersonWorkspace color="green" fontSize="4em" />
            <h2 className="card-title">Full time</h2>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Category;
