import React from "react";
import "./Job.css";
import { FaArrowRight } from "react-icons/fa";

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
      <img src={image} alt={title} className=" w-full h-[300px] mx-auto" />
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
          {skills?.map((skill) => (
            <p className="bg-dark  p-1">{skill?.value}</p>
          ))}
        </p>
        <button className="btn btn-primary">Apply Now <FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Job;
