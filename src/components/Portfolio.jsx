import React from "react";
import Button1 from "../Constants/Button1";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { portfolio } from "../data";

const Portfolio = () => {
  return (
    <section
      className="flex items-center 2xl:px-32 lg:px-16 home-bg lg:py-[12vh] md:py-[10vh] py-[12vh] justify-between w-full px-4  md:px-16 xl:px-24"
      id="portfolio"
    >
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full lg:w-[45%] xl:w-[40%] lg:gap-5 xl:gap-7 gap-7">
          <h3 className="flex items-start justify-start max-w-xl gap-5 text-2xl font-bold text-center md:text-left lg:max-w-xl md:max-w-md md:text-3xl lg:text-2xl xl:text-4xl font-poppins">
            <div className="w-[50px] h-0.5 xl:mt-5 md:mt-5 lg:mt-4 hidden lg:block bg-gray-700"></div>{" "}
            Our latest projects
          </h3>
          <p className="max-w-md text-gray-700 font-montserrat">
            This is why we are proud to offer a wide selection of our designer
            ceiling, wall, floor and table lamps. You will also find products
            ranging from modern styles, modern interpretations of classic
            design. Our collection is updated everyday with beautiful solutions
            and we are glad that you are our customers
          </p>
          <div className="flex items-center justify-between max-w-md ">
            <div>
              <Button1
                label="More Details"
                icon={
                  <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" />
                }
              />
            </div>
            <div className="flex items-center gap-1 text-3xl text-white">
              <BiSolidLeftArrow className="p-1 px-1.5 cursor-pointer hover:opacity-80 bg-gray-500 " />
              <BiSolidRightArrow className="p-1 px-1.5 cursor-pointer hover:opacity-80 bg-gray-700 " />
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 md:grid-rows-2 lg:hidden ">
          {portfolio.map((item) => {
            const { id, phoneImg, pcImg, url, no, title } = item;
            return (
              <div className="relative ">
                <img
                  key={id}
                  src={phoneImg}
                  className="w-full rounded-sm shadow-md cursor-pointer lg:hidden "
                  alt=""
                />
                <div className=" bg-[rgba(0,0,0,0.5)] absolute flex flex-col items-center justify-center rounded-bl-sm rounded-br-sm w-full bottom-0 h-[35%]">
                  <h4 className="font-semibold tracking-wider text-yellow-400 font-poppins">
                    {title}
                  </h4>
                  <p className="text-sm font-semibold tracking-wide text-gray-200 font-poppins">
                    {no} Projects
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" hidden lg:grid lg:w-[55%] lg:grid-cols-3  lg:grid-rows-1 gap-4 ">
          {portfolio.map((item) => {
            const { id, phoneImg, pcImg, url, no, title } = item;
            return (
              <div className="relative duration-300 cursor-pointer hover:scale-[102%] ">
                <img
                  key={id}
                  src={pcImg}
                  className="hidden w-full rounded-sm shadow-md lg:block "
                  alt=""
                />
                <div className=" bg-[rgba(0,0,0,0.5)] absolute flex items-center justify-center w-full flex-col rounded-bl-sm rounded-br-sm bottom-0 h-[25%]">
                  <h4 className="font-semibold tracking-wider text-yellow-400 font-poppins">
                    {title}
                  </h4>
                  <p className="text-sm font-semibold tracking-wide text-gray-200 font-poppins">
                    {no} Projects
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
