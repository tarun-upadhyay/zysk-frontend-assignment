import React from "react";

const DetailTextCard = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-[5.1rem] text-[#314f6e] font-bold leading-[5rem]">
        {title}
      </h2>
      <p className="text-xl text-[#30506d] my-7">{description}</p>
    </div>
  );
};

export default DetailTextCard;
