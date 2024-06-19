import React from "react";
import "./Job.css";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";

const Job = ({ job }) => {
  const {
    title,
    salary,
    deadline,
    description,
    category,
    status,
    image,
    skills,
    vacancy,
  } = job || {};

  const addIdToLocalStorage = (id) => {
    // Check if localStorage is available
    if (typeof Storage !== "undefined") {
      // Get existing IDs from localStorage or initialize an empty array
      const existingIds = JSON.parse(localStorage.getItem("jobIds")) || [];
      // Check if the id is already in the array
      if (!existingIds.includes(id)) {
        // Add the new id to the array
        existingIds.push(id);
        // Update localStorage with the new array
        localStorage.setItem("jobIds", JSON.stringify(existingIds));
        console.log("ID added to local storage:", id);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "ID has been added to local storage!",
        });
      } else {
        // Show error using SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Already Applied!",
        });
      }
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  };

  return (
    <div className="lg:w-[70%] shadow-2xl p-5 rounded-xl">
      <img src={image} alt={title} className="w-full h-[300px] mx-auto" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          <strong>Salary:</strong> {salary}
        </p>
        <p>
          <strong>Deadline:</strong> {deadline}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p className="flex justify-center items-center">
          <strong>Skills: </strong>
          {skills?.map((skill, index) => (
            <p key={index} className="bg-dark p-1">
              {skill?.value}
            </p>
          ))}
        </p>
        <button
          onClick={() => addIdToLocalStorage(job._id)}
          className="btn btn-primary"
        >
          Apply Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Job;
