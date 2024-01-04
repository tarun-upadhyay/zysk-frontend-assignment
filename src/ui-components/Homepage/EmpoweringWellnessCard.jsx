import React from "react";

const EmpoweringWellnessCard = ({ logo, title, desc }) => {
  return (
    <div className="p-8 flex gap-5 shadow-xl py-14 rounded-2xl">
      <span>{logo}</span>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default EmpoweringWellnessCard;
