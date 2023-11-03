import React, { useState } from "react";
import img1 from "../assets/images/about1.jpg";
import img2 from "../assets/images/about3.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Button1 from "../Constants/Button1";
import { designers } from "../data";

const About = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <section
      id="about"
      className="px-4 2xl:px-[400px] md:px-16 lg:px-24 flex justify-center lg:py-[12vh] md:py-[10vh] py-[12vh]"
    >
      <div className="flex flex-col items-center w-full gap-10 ">
        <div className="flex flex-col items-center justify-between w-full gap-10 md:gap-20 lg:flex-row ">
          <div className="flex w-full md:w-[80%] relative lg:w-[50%] items-start justify-between">
            <img src={img1} className="w-[49%] shadow-md rounded-sm " alt="" />
            <img src={img2} className="w-[47%] shadow-md rounded-sm " alt="" />
            <div className="absolute flex flex-col items-center gap-5 px-5 py-5 bg-white rounded-md shadow-md -bottom-32 -right-2 md:-right-3 md:-bottom-5 lg:-right-5 ">
              <p className=" font-montserrat md:max-w-[300px]">
                Watch a video about how we work and try for our customers
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-gray-500 font-montserrat">
                  Play video
                </p>
                <div className="flex items-center mr-5 text-3xl text-gray-200 gap-7 ">
                  <div className=" w-[100px] h-0.5 bg-gray-300"></div>
                  <AiFillPlayCircle className="rounded-full cursor-pointer vid-anim" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full mt-28 md:mt-0 flex flex-col gap-5  md:gap-10 lg:w-[45%] ">
            <h3 className="flex items-center justify-start gap-5 text-2xl font-bold md:text-4xl font-poppins">
              <div className="w-[50px] h-0.5 hidden md:block bg-gray-700"></div>{" "}
              History of our creation
            </h3>
            <p className=" font-montserrat">
              Since our beginning in 2006, We have expanded the collection of
              exclusive lamps, Today we are proud to present you our best
              lightning design, Our collection is updated everyday with
              beautiful solutions and we are glad that you, our customers,
              support us on our way! Our collection is updated everyday with
              beautiful solutions.
            </p>
            <div className="pb-1 md:border-0 md:mx-0">
              <Button1
                label="Read More"
                icon={
                  <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" />
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-10 my-5 md:w-full md:mt-20 lg:mt-20 ">
          <h3 className="flex flex-col items-center justify-start w-full gap-3 text-xl font-bold text-center md:text-left md:flex-row md:text-4xl font-poppins">
            <div className="md:w-[50px] hidden lg:block w-[50%] h-0.5 bg-gray-700"></div>
            A team United by shared values
          </h3>
          <div className="flex flex-col items-center w-full lg:flex-row">
            <div className=" py-10 lg:min-h-full flex flex-col justify-center items-center text-white bg-gray-700 p-5 w-full lg:w-[37%]">
              <h1 className="mb-5 font-bold text-center text-8xl md:text-9xl font-poppins">
                6
              </h1>
              <p className="text-lg font-semibold text-center font-montserrat">
                Professional designers <br className="md:hidden lg:block" /> in
                our team
              </p>
            </div>
            <div className=" w-full lg:w-[63%] grid grid-cols-2 lg:grid-cols-3 ">
              {designers.map((designer) => {
                const { id, name, url } = designer;
                return (
                  <div
                    key={id}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}
                    className="relative overflow-hidden rounded-sm cursor-pointer "
                  >
                    <img
                      src={url}
                      className="object-cover w-full bg-center h-36 md:h-52"
                      alt=""
                    />
                    <div
                      className={` ${
                        mouseOver
                          ? " -translate-y-0 "
                          : " opacity-0 translate-y-[100%]"
                      } bg-[rgb(0,0,0,0.3)] duration-300 overflow-hidden h-[30%] absolute bottom-0 left-0 w-full flex flex-col items-center justify-center`}
                    >
                      <h4 className="text-sm font-semibold tracking-wide text-yellow-400 font-poppins">
                        {name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
