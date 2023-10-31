import React, { useState } from "react";
import { navLinks } from "../data";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className=" z-50 flex-col justify-center py-2 fixed w-full top-0 left-0 shadow-md flex lg:justify-between lg:flex-row items-center bg-white px-5 md:px-16 lg:px-24 lg:h-[8vh]">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-bold font-poppins">In.design</h3>
        <ul className="items-center hidden gap-8 lg:flex">
          {navLinks.map((link) => {
            const { id, title, url } = link;
            return (
              <li key={id} className="">
                <a
                  href={url}
                  className="cursor-pointer font-montserrat hover:text-blue-900"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center ">
          <div className="items-center hidden gap-4 text-xl lg:flex">
            <AiOutlineSearch className="cursor-pointer hover:opacity-70 hover:text-blue-950" />
            <MdFavoriteBorder className="cursor-pointer hover:opacity-70 hover:text-blue-950" />
            <BsBag className="ml-1 text-lg cursor-pointer hover:opacity-70 hover:text-blue-950" />
          </div>

          <div
            className="block lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <AiOutlineClose className="ml-4 text-xl cursor-pointer " />
            ) : (
              <FaBars className="ml-4 text-xl cursor-pointer " />
            )}
          </div>
        </div>
      </div>

      <ul
        className={` ${
          showMenu ? "h-[60vh]  " : "h-0 py-0 border-0 overflow-hidden"
        } items-center duration-300 bg-white gap-5 justify-center  w-full font-semibold text-left flex flex-col lg:hidden`}
      >
        <div className="flex flex-col gap-5 ">
          <div
            className={` ${
              showMenu ? "flex" : "hidden"
            } items-center gap-4 pb-2  text-xl border-b-[1px] border-black lg:hidden`}
          >
            <AiOutlineSearch className="cursor-pointer hover:opacity-70 hover:text-blue-950" />
            <MdFavoriteBorder className="cursor-pointer hover:opacity-70 hover:text-blue-950" />
            <BsBag className="ml-1 text-lg cursor-pointer hover:opacity-70 hover:text-blue-950" />
          </div>
        </div>
        {navLinks.map((link) => {
          const { id, title, url } = link;
          return (
            <li
              key={id}
              className="flex items-center justify-center w-full font-montserrat"
            >
              <a
                href={url}
                onClick={() => setShowMenu(false)}
                className="w-full text-lg text-center cursor-pointer hover:text-blue-900"
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
