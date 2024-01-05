import React from "react";
import { EmpowringData } from "../../Utils/CardsData";
import EmpoweringWellnessCard from "./EmpoweringWellnessCard";
const EmpoweringWellness = () => {
  return (
    <section className="md:w-[72%] w-[95%]  mx-auto my-28">
      <div className="flex flex-col md:w-[40%] mx-auto justify-center items-center space-y-2">
        <div className="inline-block bg-[#e4e6ff] p-3 px-4 font-medium rounded-full text-xs m-2">
          EMPOWERING WELLNESS
        </div>
        <h3 className="text-4xl font-bold text-[#314f6e]">
          Personalized Health
        </h3>
        <h3 className="text-4xl font-bold text-[#314f6e]">Management with</h3>
        <h3 className="text-4xl font-bold text-[#314f6e]">VitaBot-X</h3>
      </div>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {EmpowringData.map(({ logo, title, desc }, i) => {
          return (
            <EmpoweringWellnessCard
              key={i}
              desc={desc}
              title={title}
              logo={logo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default EmpoweringWellness;
