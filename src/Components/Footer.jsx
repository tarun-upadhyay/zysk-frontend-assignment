import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-[90%] sm:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-4 my-20 text-[#000000] text-sm">
      <div id="logo md:pr-10 pr-50">
        <figure>
          <img
            src="https://vitabot-x.thewebpundit.com/wp-content/uploads/2023/12/VitaBot-Logo-3.png"
            alt="logo"
          />
          <p className="pr-16 mt-5">
            Your Journey to Wellness, with AI-Powered Guidance
          </p>
        </figure>
        <div className="sm:flex gap-2 mt-24 hidden">
          <FaFacebook className="text-2xl mr-5 text-[#2a4c63]" />
          <FaTwitter className="text-2xl mr-5 text-[#2a4c63]" />
          <FaInstagram className="text-2xl mr-5 text-[#2a4c63]" />
        </div>
      </div>
      <div className="sm:text-center text-base mt-3 sm:mt-0">
        <h6>Useful links</h6>
        <ul className="mt-7">
          <li className="mt-3">
            <a href="">Features</a>
          </li>
          <li className="mt-3">
            <a href="">How it works</a>
          </li>
          <li className="mt-3">
            <a href="">Screenshots</a>
          </li>
        </ul>
      </div>
      <div className="sm:text-center text-base mt-3 sm:mt-0">
        <h6>Useful links</h6>
        <ul className="mt-7">
          <li className="mt-3">
            <a href="">FAQs</a>
          </li>
          <li className="mt-3">
            <a href="">Terms & Conditions</a>
          </li>
          <li className="mt-3">
            <a href="">Screenshots</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="sm:px-5">
          Want to be the first to experience VitaBot-X? Sign up below and we'll
          notify you as soon as we launch.
        </p>
        <form action="">
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#fbfbfb] px-8 p-3 mt-6 w-full rounded-lg outline-none border-none"
          />
          <button className="bg-[#f0f0f0] p-4 px-8 w-full mt-6 text-base">
            Keep Me Posted
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
