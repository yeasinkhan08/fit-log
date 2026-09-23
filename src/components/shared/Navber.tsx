import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navber = () => {
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100 w-full border-b border-white/10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="rounded-4xl px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-[#C2F800]">
                  Workouts
                </a>
              </li>
              <li>
                <a className="rounded-4xl px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-[#C2F800] ">
                  My Plan
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            {" "}
            <Image src={logo} alt="logo" />
            <a className="btn-ghost text-xl font-bold w-[55] h-[28]">FITLOG</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="rounded-4xl px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-[#C2F800]">
                WorkOuts
              </a>
            </li>

            <li>
              <a className="rounded-4xl px-4 py-2 transition-colors duration-200 hover:bg-white/10 hover:text-[#C2F800]">
                MY Plan
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
