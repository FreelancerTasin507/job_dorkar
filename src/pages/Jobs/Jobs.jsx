import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { Link } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState("offline");

  useEffect(() => {
    fetch(`http://localhost:5500/allJobs`)
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
          <Job job={job} key={index} className="">
           
          </Job>
        ))}
      </div>
      
    </div>
  );
};

export default Jobs;
