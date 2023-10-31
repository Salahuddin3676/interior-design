import React from "react";
import { reviews } from "../data";
import { AiFillStar } from "react-icons/ai";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const Review = () => {
  return (
    <section className="flex 2xl:px-[400px] bg-white items-center justify-center lg:py-[12vh] md:py-[10vh] py-[12vh] w-full px-4 md:px-16 lg:px-24 flex-col gap-10 ">
      <div className="flex flex-col items-center justify-between w-full px-2 md:flex-row ">
        <h3 className="flex items-start justify-start max-w-xl gap-5 text-2xl font-bold text-center md:text-left lg:max-w-xl md:max-w-md md:text-3xl lg:text-4xl font-poppins">
          <div className="w-[80px] h-0.5 mt-5 hidden md:block bg-gray-700"></div>{" "}
          Our work process make your dream true
        </h3>
        <div className="items-center hidden gap-5 font-bold text-gray-500 md:flex text-7xl ">
          . . . .
        </div>
      </div>
      <div className="grid items-center grid-cols-1 gap-5 p-2 overflow-x-auto md:grid-cols-2 lg:grid-cols-3 md:flex-row ">
        {reviews.map((rev) => {
          const { id, name, review, company, url, rating } = rev;
          return (
            <div
              key={id}
              className="flex flex-col px-5 py-6 rounded-sm shadow-md md:px-12 shadow-gray-300 bg-gray-50 "
            >
              <div className="flex items-center gap-3 mb-5 ">
                <img
                  src={url}
                  className="object-cover w-16 h-16 bg-center rounded-full shadow-sm "
                  alt=""
                />
                <div>
                  <h4 className="font-semibold text-md font-poppins">{name}</h4>
                  <p className="text-sm text-gray-400 font-montserrat">
                    {company}
                  </p>
                </div>
              </div>

              <p className="max-w-lg text-sm text-gray-500 font-montserrat mb-7">
                {review}
              </p>

              <div className="flex items-center gap-1 font-semibold text-gray-700 font-montserrat">
                ({rating}){" "}
                {Array(rating).fill(
                  <AiFillStar className="text-xl text-gray-600" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-1 text-3xl text-white">
        <BiSolidLeftArrow className="p-1 px-1.5 cursor-pointer hover:opacity-80 bg-gray-500 " />
        <BiSolidRightArrow className="p-1 px-1.5 cursor-pointer hover:opacity-80 bg-gray-700 " />
      </div>
    </section>
  );
};

export default Review;
