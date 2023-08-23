import React from "react";
import Icon from '@mdi/react';
import { mdiCharity , mdiNintendoGameBoy ,mdiCarBack, mdiCarClock,mdiEarth ,mdiHelpBoxMultipleOutline } from '@mdi/js';


const Projects = () => {
  return (
    <div id="Projects" className=" flex flex-col items-center bg-[#f0e1d5] font-serif">
        <div className="lg:w-1/3 px-2">
      <h1 className="text-center mt-20 text-3xl font-bold text-[#616161]">
        My Projects
      </h1>
      <p className="text-center  text-lg mt-5">
        {" "}
        Here are some my solo and team projects that successfully delivered a user-friendly web applications using React.js and Node.js, with seamless integration of MongoDB and SQL databases for efficient data management.
      </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 p-10 my-10 bg-[#f0e1d5]">
      <a href="https://github.com/AsmaRasheed99/Playtopia" target="_blank">

        <div className="max-w-sm p-6 lg:h-96 bg-white border border-gray-200 rounded-lg shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
        <Icon path={mdiNintendoGameBoy} size={2} color={"#f0e1d5"}/>

            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Playtopia
            </h5>
          
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          "Playtopia" is an inspiring team project dedicated to developing an entertaining and engaging game website. Our mission is to create a platform that provide and give the users all links to online games and their rating and user's experice and opinion on these games
          </p>
        </div>
       </a>
       <a href="https://github.com/AsmaRasheed99/GiveLife" target="_blank">

        <div className="max-w-sm p-6 lg:h-96 bg-white border border-gray-200 rounded-lg shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
        <Icon path={mdiCharity} size={2} color={"#f0e1d5"}/>

            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
             GiveLife
            </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          "Give Life" is an inspiring team project dedicated to developing a comprehensive and engaging animal charity website. Our mission is to create a platform that raises awareness about animal welfare, educates the public, and encourages support for various animal-related causes.
          </p>
        </div>
        </a>
        <a href="https://github.com/AsmaRasheed99/QuickRide" target="_blank">

        <div className="max-w-sm p-6 lg:h-96 bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
    

<Icon path={mdiCarClock} size={2} color={"#f0e1d5"}/>
            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              QuickRide
            </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          A fully responsive and user-friendly full-stack web application for an online booking and reservation system for car rentals, and other service. Using the PERN stack
          </p>
        </div>
        </a>
        <a href="https://github.com/AsmaRasheed99/LUXURY-CARS" target="_blank">

        <div className="max-w-sm p-6 lg:h-96 bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
 

<Icon path={mdiCarBack} size={2} color={"#f0e1d5"}/>
            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Luxury Cars
            </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          A fully responsive React e-commerce web application for Cars sale.

          </p>
        </div>
        </a>
        <a href="https://github.com/AsmaRasheed99/Quiz-Website" target="_blank">

        <div className="max-w-sm p-6 lg:h-96 bg-white border cursor-pointer border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
        <Icon path={mdiHelpBoxMultipleOutline} size={2} color={"#f0e1d5"}/>


            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              CCQ
            </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Career Climb Quiz a quiz website that will evaluate candidates' knowledge and skills for a specific position.


          </p>

        </div>
        </a>
        <a href="https://github.com/AsmaRasheed99/Try-Culture" target="_blank">

        <div className="max-w-sm p-6 lg:h-96 bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
        <Icon path={mdiEarth} size={2} color={"#f0e1d5"} />

            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Try A Culture
            </h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          A cultural hub website that make it possible for people in a single country to easily experince a specific culture they want without travelling and it allows users to share their experience as blogs , rate the business they found through our website and a live chat so users can communicate , our website is also helpful to help people who own businesses related to a specific culture to subscribe annually so users can find out about it
          </p>
        </div>
        </a>

    </div>
    </div>
  );
};

export default Projects;
