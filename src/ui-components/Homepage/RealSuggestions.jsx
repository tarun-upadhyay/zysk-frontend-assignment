import React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

const RealSuggestions = () => {
  return (
    <>
      <div className="w-[90%] md:w-[68%] mx-auto my-32">
        <div className="flex flex-col md:w-[50%] mx-auto items-center md:text-6xl text-4xl font-bold text-[#314f6e] space-y-4">
          <h2>Real Suggestions</h2>
          <h2>by Real Users</h2>
          <p className="text-lg font-light text-center text-[#808291]">
            Hear from users who have successfully met their health goals using
            VitaBot-X.{" "}
          </p>
        </div>
        .
      </div>
      <Marquee speed={20}>
        {[...Array(10)].map((_, index) => (
          <div className="p-10 shadow-2xl w-1/2" key={index}>
            <h4 className="text-[#314f6e]">Alex De Sanchez</h4>
            <p>Freelancer Designer</p>
            <p>
              Great design templates which are quite easy to adapt. The customer
              support is very helpful
            </p>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default RealSuggestions;
