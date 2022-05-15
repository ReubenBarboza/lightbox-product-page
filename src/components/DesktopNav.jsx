import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "./NavLink";

const DesktopNav = ({
  links,
  active,
  setactive,
  isDesktopNav,
  setisDesktopNav,
}) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setactive(false);
    }
  }, [location.pathname]);

  return (
    <nav>
      <ul className="hidden md:flex gap-5 text-veryDarkBlue">
        {links.map((linkLabel, i) => {
          return (
            <NavLink
              key={linkLabel + i}
              linkLabel={linkLabel}
              active={active}
              setactive={setactive}
              isDesktopNav={isDesktopNav}
              setisDesktopNav={setisDesktopNav}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
