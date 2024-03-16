import React, { Suspense, lazy } from "react";
import { nikeAd } from "../assets/images";

const Advertisement = () => {
  return (
    <div id="home" className="flex flex-col items-center bg-gray-100 px-4 py-6">
      <h2 className="font-bold md:text-xl">Save Up to 40%</h2>
      <p className="font-bold">Shop all our new markdowns</p>

      <img loading="lazy" className=" my-4" src={nikeAd} alt="Advertisement" />
      <p className="font-bold md:text-xl -mb-1 sm:mb-3 ">Coming Soon</p>
      <h1 className="text-[40px] text-center  text-xl md:text-[60px] font-extrabold">
        NIKE AIR MAX DN
      </h1>
      <p className="font-bold text-center md:text-xl -mt-1 sm:mt-3">
        The next generation of Air technology launches April 24/24
      </p>
    </div>
  );
};

export default Advertisement;
