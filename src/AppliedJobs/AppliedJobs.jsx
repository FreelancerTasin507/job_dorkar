import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/allJobs")
      .then((res) => res.json())
      .then((data) => {
        const appliedJobIds = JSON.parse(localStorage.getItem("jobIds")) || [];
        const appliedJobs = data.filter((job) =>
          appliedJobIds.includes(job._id)
        );
        setJobs(appliedJobs);
      });
  }, []);

  const handleDelete = (id) => {
    // Get the current applied job IDs
    let appliedJobIds = JSON.parse(localStorage.getItem("jobIds")) || [];
    // Remove the id from the applied job IDs
    appliedJobIds = appliedJobIds.filter((jobId) => jobId !== id);
    // Update local storage
    localStorage.setItem("jobIds", JSON.stringify(appliedJobIds));
    // Update the jobs state
    setJobs(jobs.filter((job) => job._id !== id));
    // Show success message
    Swal.fire({
      icon: "success",
      title: "Deleted",
      text: "Job has been removed from applied list!",
    });
  };

  return (
    <div>
      <div>
        <div className="my-jobs-container">
          <h1 className="text-center p-4 text-4xl font-bold mt-10 mb-10 ">
            ALL My Jobs
          </h1>

          <table striped bordered hover className="w-full text-center">
            <thead>
              <tr>
                <th className="md:p-3">#</th>
                <th className="md:p-3">Title</th>
                <th className="md:p-3">Category</th>
                <th className="md:p-3">Vacancy</th>
                <th className="md:p-3">Salary</th>
                <th className="md:p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((job, index) => (
                <tr key={job._id}>
                  <td className="md:p-3">{index + 1}</td>
                  <td className="md:p-3">{job.title}</td>
                  <td className="md:p-3">{job.category}</td>
                  <td className="md:p-3">{job.vacancy}</td>
                  <td className="md:p-3">{job.salary}</td>
                  <td className="md:p-3">
                    <button onClick={() => handleDelete(job._id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
