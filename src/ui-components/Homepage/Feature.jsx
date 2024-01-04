import React from "react";
import { Tooltip } from "flowbite-react";
const Feature = ({ logo, title ,heading}) => {
  return (
    <Tooltip
      content={heading}
      placement="bottom"
      arrow={false}
      animation="duration-1000"
      style="light"
    >
      <div className="p-5 flex flex-col items-center space-y-4">
        {logo}
        <h3 className="text-xl text-[#314f6e] font-bold text-center leading-[30px]">
          {title}
        </h3>
      </div>
    </Tooltip>
  );
};

export default Feature;
