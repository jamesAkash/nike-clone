import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      className="w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container sm:pt-0 sm:mt-0  p-2"
      id="home"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10 xl:absolute">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus libero, labore maiores adipisci odit ea.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, i) => {
            return (
              <div key={i}>
                <p className="text-4xl font-palanquin font-bold ">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 big-primary bg-hero bg-cover bg-center relative ">
        <img
          src={bigShoeImg}
          alt="big-show"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="hidden xl:flex sm:gap-6 gap-4 absolute -bottom-[5%]">
          {shoes.map((shoe, i) => {
            return (
              <div key={i}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
