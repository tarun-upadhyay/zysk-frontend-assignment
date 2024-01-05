import React from "react";
import FaqCard from "./FaqCard";
import { faqData } from "../../Utils/CardsData";
import { Accordion } from "flowbite-react";

const FaqSection = () => {
  return (
    <div className="w-[90%] md:w-[68%] mx-auto my-32" id="faq">
      <h3 className="text-4xl text-[#314f6e] font-bold">
        Your Questions, Answered
      </h3>
      <div className="my-10">
        <Accordion collapseAll>
          {faqData.map(({ title, desc }, i) => {
            return <FaqCard title={title} desc={desc} key={i} />;
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
