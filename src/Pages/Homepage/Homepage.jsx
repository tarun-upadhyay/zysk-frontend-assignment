import React from "react";
import HomepageNav from "../../ui-components/Homepage/HomepageNav";

import Herosection from "../../ui-components/Homepage/Herosection";
import { sec1Data } from "../../Utils/CardsData";
import Feature from "../../ui-components/Homepage/Feature";

const Homepage = () => {
  return (
    <div className="">
      <section className="bg-[#f9fbfe]">
        {/* Staring of Hero section's Navbar */}
        <HomepageNav />
        {/* End of Hero section's Navbar */}

        {/* beginning  of Hero Section */}
        <Herosection />
        {/* End of Hero Section */}
      </section>
      <section>
        <div className="flex gap-6 mx-auto w-[74%]  justify-between">
          {sec1Data.map(({ logo, title, heading, desc }) => {
            return (
              <Feature
                logo={logo}
                title={title}
                heading={heading}
                desc={desc}
              />
            );
          })}
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default Homepage;
