import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState("offline");

  useEffect(() => {
    fetch(`http://localhost:5500/jobs`)
      .then((res) => res.json())
      .then((result) => {
        setJobs(result);
      });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const filteredJobs = jobs.filter((job) =>
    activeTab === "offline" ? job.status === "offline" : job.status === "remote"
  );

  return (
    <div className="mt-20">
      <h1 className="text-center p-5 text-4xl font-bold mb-20">
        Available Job's
      </h1>

      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "offline" ? "active" : ""}`}
          onClick={() => handleTabClick("offline")}
        >
          Offline Jobs
        </button>
        <button
          className={`tab-button ${activeTab === "remote" ? "active" : ""}`}
          onClick={() => handleTabClick("remote")}
        >
          Remote Jobs
        </button>
      </div>

      <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2">
        {filteredJobs.map((job, index) => (
          <div key={index} className="lg:w-[70%] shadow-2xl p-5 rounded-xl">
            <img
              src={job.image}
              alt={job.title}
              className=" w-full h-[300px] mx-auto"
            />
            <div className="card-body">
              <h2 className="card-title">{job.title}</h2>
              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
              <p>
                <strong>Deadline:</strong> {job.deadline}
              </p>

              <p>
                <strong>Category:</strong> {job.category}
              </p>
              <p>
                <strong>Skills:</strong> {job.skills.join(", ")}
              </p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Jobs;
