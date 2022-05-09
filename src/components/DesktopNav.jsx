import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "./NavLink";

const DesktopNav = ({ links }) => {
  const [activeDesktop, setactiveDesktop] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setactiveDesktop(false);
    }
  }, [location.pathname]);

  return (
    <nav>
      <ul className="hidden md:flex gap-5 text-darkGrayishBlue">
        {links.map((linkLabel, i) => {
          return (
            <NavLink
              key={linkLabel + i}
              linkLabel={linkLabel}
              setactiveDesktop={setactiveDesktop}
              activeDesktop={activeDesktop}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
