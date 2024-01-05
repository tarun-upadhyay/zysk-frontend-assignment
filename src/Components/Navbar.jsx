import React, { useEffect, useState } from "react";
import HomepageNav from "../ui-components/Homepage/HomepageNav";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isSticky ? "fixed w-full top-0 bg-white shadow-lg z-10" : "hidden"
      } `}
    >
      <HomepageNav />
    </div>
  );
};

export default Navbar;
