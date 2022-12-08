import React from "react";
import Logo from "../assets/MyLogoFix.png";
import { Buttons } from "./Buttons";

function Navbar() {
  return (
    <div className="navbar sticky top-0 z-20 bg-bg-color-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#home" className="text-base font-bold">
                HOME
              </a>
            </li>
            <li>
              <a href="#services" className="text-base font-bold">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#projects" className="text-base font-bold">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="text-base font-bold">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <a href="#home">
          <img
            src={Logo}
            alt="logo"
            className="btn btn-ghost normal-case text-xl"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a
              href="#home"
              className="text-base font-bold text-white hover:bg-transparent"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-base font-bold text-white hover:bg-transparent"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-base font-bold text-white hover:bg-transparent"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-base font-bold text-white hover:bg-transparent"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Buttons />
      </div>
    </div>
  );
}

export default Navbar;
