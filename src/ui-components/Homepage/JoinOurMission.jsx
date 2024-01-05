import React from "react";

const JoinOurMission = () => {
  return (
    <div className="w-[90%] md:w-[75%] mx-auto my-24 grid grid-cols-1 md:grid-cols-2 bg-[#f2f7ff] md:px-28 px-2 pt-16 gap-10 pb-5">
      <div>
        <h3 className="text-[4.5rem] text-[#314f6e] font-bold leading-[4rem]">
          Join Our Misssion
        </h3>
        <img
          src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/image-22.png"
          alt="joinimg"
          className="mt-16"
        />
      </div>
      <div className="mt-16">
        <div className="pr-5">
          <p className="text-[#000000] text-lg font-normal">
            Join us in shaping VitaBot-X to perfectly match your wellness needs.
            Your feedback in our brief survey is crucial to creating a health
            app that’s truly tailored for you.
          </p>
        </div>
        <button className="bg-[#000645] text-white px-12 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:translate-y-1 hover:bg-[#9b51e0] flex items-center gap-3 mt-10">
          Take the survey
        </button>
      </div>
    </div>
  );
};

export default JoinOurMission;
