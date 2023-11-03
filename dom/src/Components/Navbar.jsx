

import React, { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import '../Style/NavBar.css'
import { Link } from "react-router-dom";
import img from '../images/group.png'
const NavBar = () => {
  const [icon, seticon] = useState(false);



  return (
    <div className="asad-navbar bg-[#000032]  w-full py-2 flex justify-between ">
      <img src={img} />

      <div className=" cursor-pointer w-[33.33%]  gap-x-3 flex items-center justify-start  ">
        <h1 className="text-[25px] font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47]  text-transparent bg-clip-text">
          HORSELUX
        </h1>
      </div>

      <div className="  w-[43.33%] flex items-center justify-start">
        <ul className={icon ? "menu active" : "menu flex   items-center "}>

          <li>
            <Link
              to="/"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/counter"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}
            >
              Counter
            </Link>
          </li>

          <li>
            <Link
              to="/detail"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}
            >
              Detail
            </Link>
          </li>

          <li>
            <Link
              to="/api"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}
            >
              Api
            </Link>
          </li> 
        </ul>
      </div>


      <div className="menu__icon text-white">
        <span className="navbar__icon text-white text-[40px]" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>

      <div className=" hidden  md:block md:flex gap-x-3 ml-16">
        <button className="text-white  border rounded-full px-2 py-1">Sign in</button>
        <button className="text-white  border rounded-full px-2 py-1">Sign Up</button>

      </div>
    </div>
  );
};

export default NavBar;

