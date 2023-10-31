import React, { useEffect } from "react";
import Button from "../Constants/Button";
import { BsArrowRight } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import img1 from "../assets/images/heropic1.jpg";
import img2 from "../assets/images/heropic2.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full 2xl:px-[400px] lg:pb-0 flex items-start lg:items-center justify-center md:px-8 lg:px-24 home-bg lg:py-[12vh] py-[12vh] md:py-[10vh]"
    >
      <div className="z-10 gap-10 flex flex-col-reverse md:w-full w-[95%] lg:items-center lg:justify-between lg:w-full h-auto lg:flex-row">
        <div className=" w-full max-w-2xl lg:w-[45%]">
          <h1 className=" font-poppins font-bold text-5xl lg:text-6xl xl:leading-[70px]">
            We Make <br className="hidden md:block" /> Your H
            <span className="text-gray-600 ">o</span>mes Better
          </h1>
          <p className="mt-5 mb-7 xl:mb-8 font-montserrat">
            We are tending to the thousands of details it takes to create a
            custom home tailored to your lifestyle.
          </p>
          <div className=" w-min">
            <Button
              label="Order"
              icon={
                <BsArrowRight className="text-white duration-500 text-md group-hover:translate-x-1 group-hover:text-yellow-400" />
              }
            />
          </div>
          <div className="flex flex-col gap-5 mt-14 md:gap-8 lg:gap-5 md:items-center md:flex-row lg:flex-col lg:items-start xl:flex-row lg:mt-10 xl:mt-14">
            <div className="flex items-center gap-5 ">
              <div className="p-3 border-gray-400 rounded-full ">
                <VscWorkspaceTrusted className="text-4xl text-gray-600 " />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className=" font-poppins">Durability</p>
                <p className="text-sm leading-4 text-gray-600 font-montserrat">
                  Exclusive 10 year warranty
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 ">
              <div className="p-3 border border-gray-400 rounded-full ">
                <HiHomeModern className="text-4xl text-gray-600 " />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className=" font-poppins">Modern Interior</p>
                <p className="text-sm leading-4 text-gray-600 font-montserrat">
                  Exclusive 10 year warranty
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:block ">
          <div className="absolute hidden w-48 h-48 bg-gray-600 -z-10 lg:block -left-3 -top-3"></div>
          <img
            src={img1}
            alt=""
            className="lg:w-[380px] shadow-md rounded-sm z-20 lg:block hidden"
          />
          <img
            src={img2}
            alt=""
            className="z-20 rounded-sm shadow-md md:w-[65%] lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
