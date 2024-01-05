import React from "react";
import { NavigatinLinks } from "../Utils/NavigationLinks";

const Sidebar = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed top-64 left-[-160px]">
        <ul className={`flex justify-between p-4 transform rotate-[-90deg]`}>
          {NavigatinLinks.slice(0, 3).map(({ to, title }, i) => {
            return (
              <li
                key={i}
                className="mr-10 text-[1rem] hover:opacity-50 cursor-pointer"
              >
                <a href={to}>{title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
