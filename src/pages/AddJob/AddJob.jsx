/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddJob.css";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../Provider/AuthProvider";
const AddJob = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("https://job-portal-server-c4c5guvft.vercel.app/post-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];
  //   console.log(user);
  return (
    <div className="add-job-container">
        <h1 className="text-4xl font-bold text-center mt-10 mb-10">Add Jobs</h1>
      <div className="lg:flex justify-evenly gap-10">
        <div className="lg:w-[50%] card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <h1 className="text-xl font-bold ml-2">Job Title</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("title")}
              placeholder="title"
              defaultValue="Web developer"
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Salary</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("salary", { required: true })}
              placeholder="salary"
              defaultValue="30k"
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Vacancy</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("vacancy", { required: true })}
              placeholder="vacancy"
              type="number"
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Category</h1>
            <select
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("category")}
            >
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>
            <br />
            <h1 className="text-xl font-bold ml-2">Status</h1>
            <select
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("status")}
            >
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
            <br />
            <h1 className="text-xl font-bold ml-2">Image</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Deadline</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("deadline")}
              placeholder="deadline"
              type="date"
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Your Email</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              value={user?.email}
              {...register("postedBy")}
              placeholder="your email"
              type="email"
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Job Requrements</h1>
            <CreatableSelect
              className="w-[40%]"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
            <br />
            <h1 className="text-xl font-bold ml-2">Description</h1>
            <input
              className="text-input border px-5 py-2 rounded-3xl w-full lg:w-[40%]"
              {...register("description")}
              placeholder="description"
            />
            <br />
            <input
              className="btn btn-accent mt-5"
              value="Post Job"
              type="submit"
            />
          </form>
        </div>
        <div className="">
          <img
            className="w-100"
            src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddJob;
