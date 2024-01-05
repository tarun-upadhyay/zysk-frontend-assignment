import React from "react";
import { howitworksData } from "../../Utils/CardsData";
import DetailTextCard from "./DetailTextCard";

const HowItsWorkSection = () => {
  return (
    <section className="md:w-[70%] mx-auto">
      <div className="md:sticky top-8 mr-20">
        <figure>
          <img
            src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2024/01/Frame-1000003799-933x1024.png"
            alt="goalSection"
            className="w-3/5 animate-bounce duration-500 hidden md:block"
          />
        </figure>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:ml-36" id="howitworks">
        <div className="md:w-full hidden md:block"></div>
        <div>
          {howitworksData.map(({ subTitle, title, desc }, i) => {
            return (
              <div className="my-22 p-5" key={i}>
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
