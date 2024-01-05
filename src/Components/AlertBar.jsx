import React from "react";

const AlertBar = () => {
  return (
    <div className="hidden sm:block">
      <div className="h-11 w-full bg-t-blue text-[#ffffff] font-normal text-center text-xs flex items-center justify-center">
        Take our quick survey to shape VitaBot's future!{" "}
        <a href="">
          <span className="ml-2 text-[#808291] text-[13px] hover:text-[#ffffff]">
            Yes, I'm in! &nbsp; &gt;{" "}
          </span>
        </a>
      </div>
    </div>
  );
};

export default AlertBar;
