import React from "react";

const Button1 = ({ label, icon }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-bold text-gray-800 duration-200 border-b border-gray-600 hover:text-blue-800 group font-montserrat"
    >
      {icon} {label}
    </button>
  );
};

export default Button1;
