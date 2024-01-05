import React from "react";

const EmpoweringWellnessCard = ({ logo, title, desc }) => {
  return (
    <div className="p-8 flex gap-5 shadow-xl py-14 rounded-2xl duration-200 hover:scale-95 cursor-pointer">
      <span>{logo}</span>
      <div>
        <h3 className="text-[1.3rem] font-medium text-[#314f6e]">{title}</h3>
        <p className="mt-5 text-base text-[#808291] font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default EmpoweringWellnessCard;
