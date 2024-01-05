import React from "react";
import { Tooltip } from "flowbite-react";
const Feature = ({ logo, title, heading, desc }) => {
  return (
    <div>
      <div className="hidden md:block">
        <Tooltip
          content={heading}
          placement="bottom"
          arrow={false}
          animation="duration-1000"
          style="light"
        >
          <div className="p-5 flex flex-col items-center space-y-4">
            {logo}
            <h3 className="md:text-xl text-lg text-[#314f6e] font-bold text-center leading-[30px]">
              {title}
            </h3>
          </div>
        </Tooltip>
      </div>
      <div className="block md:hidden shadow-lg p-3">
        {" "}
        <div className="p-5 flex flex-col items-center space-y-4">
          {logo}
          <h3 className="md:text-xl text-lg text-[#314f6e] font-bold text-center leading-[30px]">
            {title}
          </h3>
          <p className="text-center text-[#808291]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
