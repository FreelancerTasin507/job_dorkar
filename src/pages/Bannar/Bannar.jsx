import React from "react";
import { FaSearch, FaArrowAltCircleDown, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Bannar = () => {
  return (
    <div>
      <section className="">
        <div className="bg-dark p-5">
          <div className="row flex justify-around items-center ">
            <div className="">
              <h4 className="text-4xl font-semibold">Helping you to find any type of job</h4>
              <h1 className=" text-3xl font-bold mt-4">
                Find Your Dream <br /> Job Today
              </h1>
              <div className="search-box">
                <div className=" mt-5 flex space-x-4">
                  <div className=" flex items-center border border-gray-300 p-2 rounded">
                    <p>
                      <FaSearch className="text-gray-500 text-xl" />
                    </p>
                    <p className="input-text p-3 ml-4">search</p>
                  </div>
                  <div className=" small-box flex items-center border border-gray-300 p-2 rounded">
                    <p className="input-text p-3">category</p>
                    <p className="ml-4">
                      <FaArrowAltCircleDown className="text-gray-500 text-xl" />
                    </p>
                  </div>
                  <div className="location-input small-box flex items-center border border-gray-300 p-2 rounded">
                    <p className="input-text p-3">location</p>
                    <p className="ml-4">
                      <FaMapMarkerAlt className="text-gray-500 text-xl" />
                    </p>
                  </div>
                  <div className="text-white p-3">
                    <div className=" flex items-center bg-gray-800 text-white rounded p-2">
                      <p className="mr-2 mt-2">
                        <FaSearch className="text-gray-500 text-xl" />
                      </p>
                      <p className="p-2">search</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <img
                className="w-[80%]"
                src="https://i.ibb.co/F5MpXPv/9731139.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannar;
