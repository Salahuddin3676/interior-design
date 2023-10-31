import React from "react";

const Button = ({ label, icon }) => {
  return (
    <button
      type="button"
      className=" flex w-full justify-center group items-center gap-2 text-sm tracking-wide font-montserrat text-indigo-100 px-7 py-2.5 hover:bg-gray-700 duration-100 rounded-sm bg-gray-600"
    >
      {label} {icon}
    </button>
  );
};

export default Button;
