import React from "react";
import { NavigatinLinks } from "../../Utils/NavigationLinks";
import { FaArrowRight } from "react-icons/fa";
const HomepageNav = () => {
  return (
    <div className="mx-auto w-[80%]">
      <nav className="flex justify-between my-5">
        <div>
          <img
            src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2023/12/VitaBot-Logo-4.png"
            alt=""
            className="hidden md:block h-7"
          />
          <img
            src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2023/12/VitaBot-Logo-4.png"
            alt=""
            className="block md:hidden h-7"
          />
        </div>

        <div>
          <ul className="flex">
            {NavigatinLinks.map(({ to, title }) => {
              return (
                <li className="inline-block mx-5 leading-7 text-[1rem] hover:opacity-50 cursor-pointer">
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="py-3 px-4 bg-[#edf2f6] rounded-full leading-4 text-sm flex gap-2 items-center justify-center hover:bg-black hover:text-[#ffffff] transition-colors duration-500">
          Take Survey <FaArrowRight />
        </button>
      </nav>
      <hr className="border-1 border-[#e3e4e7] my-4" />
    </div>
  );
};

export default HomepageNav;
