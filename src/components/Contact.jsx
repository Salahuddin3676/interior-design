import React from "react";
import Button from "../Constants/Button";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../assets/images/vase.jpg";
import img2 from "../assets/images/heropic2.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative 2xl:px-32 lg:my-[12vh] w-full lg:py-[12vh] md:py-[10vh] py-[12vh] px-4 md:px-16 lg:px-24 home-bg flex items-center justify-center"
    >
      <div className="flex flex-col-reverse items-center justify-between w-full gap-14 md:gap-16 lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2 xl:w-[60%] md:gap-10 lg:gap-5 gap-5">
          <h3 className="flex items-start justify-start max-w-xl gap-5 text-xl font-bold text-center lg:text-left md:mx-auto lg:mx-0 lg:max-w-xl md:max-w-xl md:text-3xl lg:text-4xl font-poppins">
            <div className="w-[80px] h-0.5 mt-5 hidden lg:block bg-gray-700"></div>{" "}
            Get a free consultation, Just leave a request below
          </h3>
          <form
            className="flex flex-col items-center gap-4 md:flex-row"
            action=""
          >
            <input
              type="text"
              placeholder="Your Phone Number"
              className="flex-1 w-full px-3 py-2 text-sm tracking-wider text-center bg-white outline-0 font-montserrat"
            />
            <div className="w-full md:w-auto">
              <Button
                label="Callback"
                icon={
                  <BsArrowRight className="text-white duration-500 text-md group-hover:translate-x-1 group-hover:text-yellow-400" />
                }
              />
            </div>
          </form>
        </div>

        <div className=" lg:w-[30%] w-full rounded-sm">
          <img
            src={img1}
            alt=""
            className="lg:w-[320px] absolute lg:right-24 2xl:-top-[2%] 2xl:right-[400px] lg:-top-[7%] xl:-top-[15%] rounded-sm shadow-md z-20 lg:block hidden"
          />
          <img
            src={img2}
            alt=""
            className="z-20 md:w-[65%] md:mx-auto rounded-sm shadow-gray-500 shadow-md lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
