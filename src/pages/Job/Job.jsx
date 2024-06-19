import React from "react";
import "./Job.css"

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

  return (
    <div className="lg:w-[70%] shadow-2xl p-5 rounded-xl">
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
  );
};

export default Job;
