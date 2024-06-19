/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrash } from "react-icons/fa";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5500/myJobs/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, [user, control]);

  const handleSearch = () => {
    fetch(`http://localhost:5500/getJobsByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  };

  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 text-4xl font-bold mt-10 mb-10 ">
          ALL My Jobs
        </h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border py-3 px-3 rounded-lg "
            placeholder="Search"
          />{" "}
          <button className="btn btn-info" onClick={handleSearch}>Search</button>
        </div>
        <table striped bordered hover className="w-full text-center">
          <thead>
            <tr>
              <th className="md:p-3">#</th>
              <th className="md:p-3">Title</th>
              <th className="md:p-3">Category</th>
              <th className="md:p-3">vacancy</th>
              <th className="md:p-3">salary</th>
              <th className="md:p-3">Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {jobs?.map((job, index) => (
              <tr className="">
                <td className="md:p-3">{index + 1}</td>
                <td className="md:p-3">{job.title}</td>
                <td className="md:p-3">{job.category}</td>
                <td className="md:p-3">{job.vacancy}</td>
                <td className="md:p-3">{job.salary}</td>

                <td className="md:p-3">
                  {" "}
                  <button>
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
