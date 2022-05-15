import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({
  linkLabel,
  active,
  setactive,
  isDesktopNav,
  setisDesktopNav,
}) => {
  return (
    <li
      className={classNames({
        "relative after:absolute after:w-full after:inset-0 after:border-b-4 after:border-customOrange after:translate-y-9":
          active === linkLabel && isDesktopNav,
      })}
    >
      <Link
        to={"/" + linkLabel}
        onClick={(e) => {
          setactive(linkLabel);
        }}
        href={linkLabel.toLowerCase()}
      >
        {linkLabel}
      </Link>
    </li>
  );
};

export default NavLink;
