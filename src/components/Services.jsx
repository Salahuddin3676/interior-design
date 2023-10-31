import React from "react";
import Button1 from "../Constants/Button1";
import { BsArrowRight } from "react-icons/bs";
import { services } from "../data";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full 2xl:px-[400px] bg-slate-50 pb-10 lg:py-[12vh] md:py-[10vh] py-[12vh] md:px-16 px-4 lg:px-24"
    >
      <div className="flex flex-col w-full gap-5 md:gap-10">
        <div className="flex flex-col gap-5 mb-10 md:flex-row md:items-center md:justify-between ">
          <h3 className="flex items-start justify-start max-w-xl gap-5 text-2xl font-bold text-center md:text-left lg:max-w-xl md:max-w-md md:text-3xl lg:text-4xl font-poppins">
            <div className="w-[80px] h-0.5 mt-5 hidden md:block bg-gray-700"></div>{" "}
            Our work process make your dream true
          </h3>
          <div className="mx-auto ">
            <Button1
              label="More Details"
              icon={
                <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" />
              }
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-5 gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 ">
          {services.map((service) => {
            const { id, title, content, icon } = service;
            return (
              <div
                key={id}
                className="flex flex-col w-full h-full gap-8 p-5 bg-white rounded-md shadow-lg md:py-8"
              >
                <div className="flex flex-row-reverse items-center justify-between gap-4 md:flex-col md:items-start">
                  <div className="flex items-center justify-center p-2 text-3xl text-blue-900 border rounded-full shadow-inner w-14 h-14 ">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold md:pl-1 font-poppins">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-col-reverse items-start justify-between w-full gap-2 md:flex-row md:items-center ">
                  <p className="max-w-sm text-gray-500 font-montserrat">
                    {content}
                  </p>
                  <p className="text-lg font-bold text-blue-900 font-poppins ">
                    0{id}.
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

export default Services;
