import React from "react";
import { NavigatinLinks } from "../../Utils/NavigationLinks";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const HomepageNav = () => {
  return (
    <div className="mx-auto w-[95%] md:w-[80%]">
      <nav className="flex justify-between my-5">
        <div>
          <img
            src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2023/12/VitaBot-Logo-4.png"
            alt="logo"
            className="h-7"
          />
        </div>

        <div className="hidden md:block">
          <ul className="flex">
            {NavigatinLinks.map(({ to, title }, i) => {
              return (
                <li
                  key={i}
                  className="inline-block mx-5 leading-7 text-[1rem] hover:opacity-50 cursor-pointer"
                >
                  <a href={to}>
                  {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="hidden md:flex py-3 px-4 bg-[#edf2f6] rounded-full leading-4 text-sm gap-2 items-center justify-center hover:bg-black hover:text-[#ffffff] transition-colors duration-500">
          Take Survey <FaArrowRight />
        </button>
        <div className="block md:hidden mr-5">
          <GiHamburgerMenu className="text-3xl" />
        </div>
      </nav>
    </div>
  );
};

export default HomepageNav;
