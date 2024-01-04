import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Herosection = () => {
  return (
    <main className="flex items-center gap-12 my-10 mb-20 mx-auto w-[80%]">
      <div className="p-5 ">
        <div className="relative">
          <h1 className="text-6xl text-[#314f6e] font-bold w-[77%]">
            {" "}
            <span>Your Journey to Wellness, Personalized by</span>
            <span>
              <img
                src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/Vitabot-X-2.svg"
                alt=""
                className="absolute bottom-0 left-24 h-[58px]"
              />
              <span className="text-6xl text-[#314f6e] font-bold  absolute right-24 bottom-0">
                .
              </span>
            </span>
          </h1>
        </div>
        <div className="w-[77%]">
          <p className="my-10 text-lg text-[#313f58]">
            Choose Your Goals, Achieve Them with AI-Powered Guidance
          </p>
          <button className="bg-[#000645] text-white px-12 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:translate-y-1 hover:bg-[#9b51e0] flex items-center gap-3">
            Join Us <FaArrowRight />
          </button>
        </div>
      </div>
      <figure>
        <img
          src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/iphone-14-pro-mockup-against-the-wall-front-view-1-1-min.png"
          alt="hero section img"
          className="h-4/5 w-[1200px] rounded-3xl"
        />
      </figure>
    </main>
  );
};

export default Herosection;
