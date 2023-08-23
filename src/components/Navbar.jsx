import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="flex h-28 justify-between w-screen pb-3 pt-3 lg:px-28 px-5 lg:text-lg text-xs font-serif font-semibold absolute top-0 z-10">
      <div className="font-serif font-bold italic"><span className="font-serif font-bold italic lg:text-4xl text-base text-brown-500">A</span>SMA</div>
      <ul className="flex">
        <HashLink smooth={true} to="#About">
          {" "}
          <li className="lg:mx-5 mx-1 underline">About</li>
        </HashLink>
        <HashLink smooth={true} to="#Projects">
          {" "}
          <li className="lg:mx-5 mx-1 underline">Projects</li>
        </HashLink>
        <HashLink smooth={true} to="#Experience">
          {" "}
          <li className="lg:mx-5 mx-1 underline">Experience</li>
        </HashLink>
        <HashLink smooth={true} to="#Contact">
          {" "}
          <li className="lg:mx-5 ml-1 underline">Contact</li>
        </HashLink>
      </ul>
    </div>
  );
};

export default Navbar;
