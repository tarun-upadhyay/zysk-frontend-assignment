import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Herosection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center gap-12 my-10 mb-20 mx-auto w-[95%] md:w-[80%]">
      <div className="md:p-5 py-10 md:py-5 mt-5 md:mt-0">
        <div className="relative">
          <h1 className="text-5xl md:text-6xl text-[#314f6e] font-bold  md:w-[77%]">
            {" "}
            <span>Your Journey to Wellness, Personalized by</span>
            <span>
              <img
                src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/Vitabot-X-2.svg"
                alt=""
                className="absolute md:bottom-0 md:left-24 h-[58px] bottom-[-60px]"
              />
              <span className="text-6xl text-[#314f6e] font-bold  absolute md:right-24 md:bottom-0 bottom-[-65px]">
                .
              </span>
            </span>
          </h1>
        </div>
        <div className="md:w-[77%]" id="features">
          <p className="md:my-10 mt-20 md:mt-10 text-lg text-[#313f58]">
            Choose Your Goals, Achieve Them with AI-Powered Guidance
          </p>
          <button className="bg-[#000645] text-white px-12 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:translate-y-1 hover:bg-[#9b51e0] flex items-center gap-3 mt-10 md:mt-0">
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
