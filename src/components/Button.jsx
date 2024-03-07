import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-red-800 transition duration-300">
      {label}
      <img
        className="ml-2 w-5 h-5 rounded-full"
        src={iconURL}
        alt="arrow-ring-icon"
      />
    </button>
  );
};

export default Button;
