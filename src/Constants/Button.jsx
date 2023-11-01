import React from "react";

const Button = ({ label, icon, bg }) => {
  return (
    <button
      type="button"
      className={` flex w-full justify-center group items-center gap-2 text-sm tracking-wide font-montserrat text-indigo-100 px-7 py-2.5 duration-100 rounded-sm ${
        !bg ? "bg-gray-600 hover:bg-gray-700" : bg
      }`}
    >
      {label} {icon}
    </button>
  );
};

export default Button;
