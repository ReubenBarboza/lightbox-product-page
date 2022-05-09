import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({
  linkLabel,
  setactiveDesktop,
  activeDesktop,
  setactiveMobile,
  activeMobile,
}) => {
  return (
    <li
      className={classNames({
        "relative after:absolute after:w-full after:inset-0 after:border-b-4 after:border-customOrange after:translate-y-9":
          activeDesktop === linkLabel,
      })}
    >
      {console.log(`mobile ${activeMobile} desktop ${activeDesktop}`)}
      <Link
        to={"/" + linkLabel}
        onClick={(e) => {
          setactiveDesktop?.(linkLabel);
          setactiveMobile?.(linkLabel);
        }}
        href={linkLabel.toLowerCase()}
      >
        {linkLabel}
      </Link>
    </li>
  );
};

export default NavLink;
