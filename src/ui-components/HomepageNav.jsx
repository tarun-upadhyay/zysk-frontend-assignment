import React from "react";
import { NavigatinLinks } from "./NavigationLinks";

const HomepageNav = () => {
  return (
    <div className="w-[80%] mx-auto flex">
      <div>
        <img
          src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2023/12/VitaBot-Logo-4.png"
          alt=""
          className="hidden md:block"
        />
        <img
          src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2023/12/VitaBot-Logo-4.png"
          alt=""
          className="block md:hidden"
        />
      </div>

      <div>
        <ul>
          {NavigatinLinks.map(({ to, title }) => {
            return (
              <li className="inline-block mx-5 leading-7 text-lg">{title}</li>
            );
          })}
        </ul>
      </div>
      <button className="p-2 px-6 bg-[#edf2f6] rounded-full leading-4 text-sm">Take Survey</button>
    </div>
  );
};

export default HomepageNav;
