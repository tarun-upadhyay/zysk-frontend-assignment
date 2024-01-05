import React from "react";
import HomepageNav from "../../ui-components/Homepage/HomepageNav";

import Herosection from "../../ui-components/Homepage/Herosection";
import { sec1Data } from "../../Utils/CardsData";
import Feature from "../../ui-components/Homepage/Feature";
import { FeatureSection } from "../../ui-components/Homepage/FeatureSection";
import HowItsWorkSection from "../../ui-components/Homepage/HowItsWorkSection";
import EmpoweringWellness from "../../ui-components/Homepage/EmpoweringWellness";
import ScreenShotSection from "../../ui-components/Homepage/ScreenShotSection";
import FaqSection from "../../ui-components/Homepage/FaqSection";
import RealSuggestions from "../../ui-components/Homepage/RealSuggestions";
import JoinOurMission from "../../ui-components/Homepage/JoinOurMission";

const Homepage = () => {
  return (
    <div className="">
      <section className="bg-[#f9fbfe]">
        {/* Staring of Hero section's Navbar */}
        <HomepageNav />
        <hr className="border-1 border-[#e3e4e7] my-4 hidden md:block" />
        {/* End of Hero section's Navbar */}

        {/* beginning  of Hero Section */}
        <Herosection />
        {/* End of Hero Section */}
      </section>
      <section >
        <div className="flex flex-col md:flex-row gap-6 mx-auto w-[95%] items-center md:w-[74%]  justify-between">
          {sec1Data.map(({ logo, title, heading, desc }, i) => {
            return (
              <Feature
                key={i}
                logo={logo}
                title={title}
                heading={heading}
                desc={desc}
              />
            );
          })}
        </div>
      </section>
      <FeatureSection />
      <HowItsWorkSection />
      <EmpoweringWellness />
      <ScreenShotSection />
      <FaqSection />
      <RealSuggestions />
      <JoinOurMission />
    </div>
  );
};

export default Homepage;
