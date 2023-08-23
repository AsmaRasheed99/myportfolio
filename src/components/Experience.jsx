import { mdiArrowUp } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { HashLink } from "react-router-hash-link";

const Experience = () => {
  return (
    <div
      id="Experience"
      className=" flex flex-col items-center gap-10 bg-[#f0e1d5] font-serif"
    >
      <div className="flex flex-col lg:flex-row md:flex-col justify-center  lg:p-32 md:p-24 p-5 my-10 bg-[#f0e1d5]">
        <div className="flex flex-col lg:w-1/2 w-full mr-10 gap-10">
          <p className="text-4xl">Education</p>
          <div className=" lg:h-96 md:h-80 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Physic
            </h5>

            <p className="text-2xl flex flex-wrap mb-3 font-normal text-gray-500 dark:text-gray-400">
              Hashemite University (2017 - 2021) | 2.92/4 GPA |
            </p>
          </div>
          <div className=" lg:h-96 md:h-80 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              7 Months Full Stack Bootcamp
            </h5>
            <p className="mb-3 font-normal flex flex-wrap text-2xl text-gray-500 dark:text-gray-400">
              Orange Coding Academy (02/2023 - 08/2023)
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 lg:mt-0 mt-10 w-full gap-10">
          <p className="text-4xl">Experience</p>
          <div className=" lg:h-96 md:h-80 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <h5 className="mb-2 xl:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              08/2022 – Present <br />
              Volunteer at Community Service Centre
            </h5>
            <p className="mb-3 xl:text-2xl font-normal text-xl text-gray-500 dark:text-gray-400">
              Volunteering and helping the community service center belonging to
              the municipality with planning and organizing events and courses
              that will help the residents of my area especially the youths
            </p>
          </div>
          <div className=" lg:h-96 xl:text-2xl md:h-80 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              02/2023 – 08/2023 <br />
              Trainee at Coding Academy by Orange
            </h5>
            <p className="mb-3 font-normal text-xl xl:text-2xl text-gray-500 dark:text-gray-400">
              Intensive course in Full Stack Web Development in collaboration
              with Simplon.co and Princess Sumaya University for Technology
              (PSUT)
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full  justify-end">
        <HashLink smooth={true} to="#Hero">
          <button className="btn btn-circle lg:m-10 mr-10 animate-bounce">
            <Icon path={mdiArrowUp} size={1} />
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default Experience;
