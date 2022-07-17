import { useContext, useEffect, useState } from "react";
import appContext from "../context/appContext";

const TemperatureCard = () => {
  const { temp, city, country, condition } = useContext(appContext);
  const url = `url(https://source.unsplash.com/random/1200×1026/?${
    city ? city : "new-york"
  })`;

  return (
    <>
      <div
        className="h-1/4 md:h-1/2 bg-opacity-10 bg-cover bg-center rounded"
        style={{
          backgroundImage: url,
        }}
      >
        <div className="h-full bg-gradient-to-b from-primary/[0.4] to-bgColor/[0.999] flex flex-col-reverse">
          <div className="flex flex-row w-full justify-between">
            <div className="p-5">
              <p className="font-montserrat text-6xl font-thin text-lavender ">
                {temp}&deg;<sup className="text-4xl">C</sup>
              </p>
              <p className="text-lavender font-thin text-sm">
                {condition.desc}
              </p>
            </div>
            <div className="p-5">
              <p className="font-montserrat text-3xl font-bold text-lavender drop-shadow shadow-lavender">
                {city}
              </p>
              <p className="font-montserrat text-lg font-light text-lavender ">
                {country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemperatureCard;
