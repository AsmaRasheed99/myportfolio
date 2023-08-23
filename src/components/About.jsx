import React from "react";
import { Card, Progress } from "@material-tailwind/react";

const About = () => {
  return (
    <div id='About' className="flex flex-col md:flex-col lg:flex-row text-cener justify-center w-screen lg:p-20 py-5 font-serif">
      <div className="flex flex-col justify-center lg:w-1/3 p-5 mx-7 min-w-60">
        <p className="mt-5 font-extrabold text-3xl text-start text-[#616161]">About Myself</p>
        <p className="mt-5 text-lg font-semibold text-[#616161] ">
        Highly skilled web developer with expertise in HTML, CSS, and JavaScript, complemented by proficiency in React.js and Node.js, backed by a solid understanding of MongoDB and SQL databases for delivering dynamic and responsive web applications.
       
        </p>
      </div>
      <Card className=" lg:w-1/3 p-5 mx-7 min-w-60 flex flex-col justify-center">
        <span className="mt-5 font-extrabold text-3xl text-start">Skills</span>
        <ul className="flex flex-wrap text-xl gap-10 p-5 animate-pulse text-brown-800 ">
          <li className="shadow-md">HTML5</li>
          <li className="shadow-md">CSS</li>
          <li className="shadow-md">BOOTSTRAP</li>
          <li className="shadow-md">TAILWIND</li>
          <li className="shadow-md">JAVASCRIPT</li>
          <li className="shadow-md">REACT JS</li>
          <li className="shadow-md">NODE JS</li>
          <li className="shadow-md">SQL</li>
          <li className="shadow-md">MONGODB</li>
          <li className="shadow-md">WORDPRESS</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;
