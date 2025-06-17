"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 header">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] container">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo2.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin logo-img"
          />
        </a>

        <div className="flex flex-row items-center header-right-section">
          <a href="#skills" className="btn-primary text-md text-gray-200 nav-btn">Skills</a>
          <a href="#projects" className="btn-primary text-md text-gray-200 nav-btn">Projects</a>
          <div
            onClick={() => window.open("mailto:rizwanssv@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black bg-[#2E2E2E] rounded-xl nav-btn"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
