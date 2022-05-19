import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavbar } from "../../context/navbar-context";
import NavLink from "./NavLink";

const DesktopNav = ({ links }) => {
  const { setactiveLink } = useNavbar();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setactiveLink(false);
    }
  }, [location.pathname]);

  return (
    <nav>
      <ul className='hidden md:flex gap-5 text-veryDarkBlue'>
        {links.map((linkLabel, i) => {
          return <NavLink key={linkLabel + i} linkLabel={linkLabel} />;
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
