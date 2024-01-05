import React from "react";
import { ScreenShotsUrl } from "../../Utils/CardsData";

const ScreenShotSection = () => {
  return (
    <div className="bg-[#f0f1f7] grid grid-cols-1 md:grid-cols-4 overflow-auto md:gap-28 py-36 pl-5 md:pl-0" id="screenshots">
      {ScreenShotsUrl.map(({ url, alt }, i) => {
        return (
          <div key={i} className={`hidden sm:block`}>
            <img src={url} alt={alt} className="rounded-3xl" />
          </div>
        );
      })}
    </div>
  );
};

export default ScreenShotSection;
