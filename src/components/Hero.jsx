import React from "react";
import Image from "../images/asma004.png";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <section
      id="Hero"
        className="relative  bg-cover bg-center bg-no-repeat font-serif"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="lg:absolute inset-0  lg:mt-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
        <div className="lg:relative  xl:ml-96 lg:ml-32  lg:p-0 md:p-32 p-16 lg:flex lg:h-screen lg:items-center md:items-end justify-center ">
          <div className="text-start ">
            <p className="xl:text-9xl  lg:text-7xl md:text-5xl text-2xl font-extrabold ">
             Asma Rasheed
              </p>
              <p className="block font-extrabold text-[#9b7e73] lg:text-5xl md:text-3xl text-lg">
                Full Stack Web Developer{" "}
              </p>
            
            <p className="mt-4 max-w-2xl lg:text-xl/relaxed md:text-lg/relaxed text-base/relaxed">
            A physics graduate and skilled full-stack web developer with a strong
          analytical mindset and a deep passion for coding. I am driven by the
          endless possibilities of programming and the ability to create
          innovative solutions. and with combining my background in physics with
          my expertise in web development, I bring a unique perspective to
          problem-solving.            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <HashLink smooth={true} to="#About"
                className="block w-full rounded bg-brown-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#9b7e73] focus:outline-none focus:ring  sm:w-auto"
              >
                Learn More
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
