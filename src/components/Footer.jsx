import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Constants/Button";
import { category, navLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full px-4 text-white bg-gray-700 py-7 md:py-10 md:px-16 lg:px-24">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-14 md:flex-row md:items-start">
          <div className=" lg:w-[30%] md:w-[45%] flex-col p-3 py-5 rounded-md border border-gray-500 md:border-0 md:p-0 w-full">
            <h5 className="mb-6 font-bold tracking-wide text-white uppercase font-montserrat">
              Newsletter
            </h5>
            <form
              action=""
              className="flex items-center justify-between w-full mb-5 border border-gray-600 rounded-sm "
            >
              <input
                type="text"
                placeholder="Your Email"
                className="flex-1 py-3 pl-2 text-sm bg-transparent border-r border-gray-600 outline-0 font-montserrat"
              />
              <div className="bg-transparent w-min">
                <Button
                  icon={
                    <BsArrowRight className="text-white duration-500 text-md group-hover:translate-x-1 group-hover:text-yellow-400" />
                  }
                  bg="bg-transparent"
                />
              </div>
            </form>
            <p className="mb-10 text-sm font-montserrat">
              Sign up to receive special offers!{" "}
            </p>
            <div className="flex items-center max-w-[120px] text-2xl justify-between ">
              {socialLinks.map((link) => {
                const { id, url, icon, title } = link;
                return (
                  <a
                    key={id}
                    className="p-1 text-white bg-gray-800 rounded-sm shadow-sm cursor-pointer shadow-gray-500 "
                    href={url}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
            <p className="text-sm tracking-wide mt-7 font-montserrat">
              Design by{" "}
              <a
                href="https://www.behance.net/zamilahamed"
                className="font-semibold text-green-400 underline "
              >
                Zamil Ahmed
              </a>
            </p>
          </div>

          <div className="w-full md:w-[45%] lg:w-[35%]">
            <div className="flex flex-col gap-10 text-sm md:justify-between lg:justify-around md:items-start md:flex-row ">
              <ul className="flex flex-col gap-2.5">
                <h4 className="mb-3 text-[16.5px] font-bold tracking-wide text-purple-300 uppercase font-montserrat">
                  Category
                </h4>
                {category.map((item) => {
                  const { id, title, url } = item;
                  return (
                    <li key={id} className="tracking-wide font-montserrat">
                      <a
                        href={url}
                        className="duration-200 hover:text-yellow-300"
                      >
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <ul className="flex flex-col gap-2.5">
                <h4 className="mb-3 text-[16.5px] font-bold text-purple-300 uppercase font-montserrat">
                  Company
                </h4>
                {navLinks.map((item) => {
                  const { id, title, url } = item;
                  return (
                    <li key={id} className="tracking-wide font-montserrat">
                      <a
                        href={url}
                        className="duration-200 hover:text-yellow-300"
                      >
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-1 text-sm border-t border-gray-500 md:-mb-4 pt-7 md:justify-between md:flex-row">
          <h3 className="hidden text-lg font-bold tracking-wide md:block font-montserrat">
            In.Design
          </h3>
          <p className="text-sm tracking-wide text-center md:text-left font-montserrat">
            Copyright 2023 &copy;. All rights reserved
          </p>

          <p className="items-center hidden gap-2 text-xs tracking-wide lg:flex font-montserrat">
            <a href="#" className="text-gray-300 underline ">
              Privacy Policy
            </a>
            <span className="mb-5 text-4xl ">.</span>
            <a href="#" className="text-gray-300 underline ">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
