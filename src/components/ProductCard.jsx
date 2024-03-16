import React from "react";
import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[280px] h-[280px]" src={imgURL} alt={name} />
      <div className="mt-8 flex flex-col justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-slate-gray font-montserrat text-xl leading-normal">
          4.2
        </p>

        <h3 className="text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="font-montserrat text-coral-red text-2xl font-semibold leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
