import React from "react";
import DetailTextCard from "./DetailTextCard";

export const FeatureSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[78%] mx-auto my-28 items-center gap-10">
      <div className="pr-5">
        <div className="px-6 py-1 bg-[#eef3f7] inline-block my-6 rounded-full text-`xs">
          GET TO KNOW
        </div>
        <DetailTextCard
          title={"VitaBot-X"}
          description={
            "VitaBot-X is not just an app; it’s a personalized guide on your journey to optimal health. Whether your goal is to manage weight, improve fitness, or enhance mental well-being, VitaBot-X tailors its approach to suit your individual needs, powered by advanced AI technology."
          }
        />
      </div>
      <figure>
        <img
          src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/Group-1000002884-4.png"
          alt="feature img"
          className="md:w-4/5 pr-2"
        />
      </figure>
    </section>
  );
};
