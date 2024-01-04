import React from "react";
import { howitworksData } from "../../Utils/CardsData";
import DetailTextCard from "./DetailTextCard";

const HowItsWorkSection = () => {
  return (
    <section className="w-[70%] mx-auto">
      <div className="sticky top-8 mr-20">
        <figure>
          <img
            src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/Frame-1000003799-933x1024.png"
            alt="goalSection"
            className="w-3/5 animate-bounce duration-500"
          />
        </figure>
      </div>
      <div className="grid grid-cols-2 ml-36">
        <div className="w-full"></div>
        <div>
          {howitworksData.map(({ subTitle, title, desc }) => {
            return (
              <div className="my-22 p-5">
                <p className="text-[#30506d] font-bold my-5">{subTitle}</p>
                <DetailTextCard description={desc} title={title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItsWorkSection;
