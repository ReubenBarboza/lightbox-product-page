import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { useNavbar } from "../../context/navbar-context";

const NavLink = ({ linkLabel }) => {
  const { isDesktopNavbar, activeLink, setactiveLink } = useNavbar();

  function handleOnClick() {
    setactiveLink(linkLabel);
  }
  return (
    <li
      className={classNames({
        "relative after:absolute after:w-full after:inset-0 after:border-b-4 after:border-customOrange after:translate-y-9":
          activeLink === linkLabel && isDesktopNavbar,
      })}
    >
      <Link
        to={"/" + linkLabel}
        onClick={handleOnClick}
        href={linkLabel.toLowerCase()}
      >
        {linkLabel}
      </Link>
    </li>
  );
};

export default NavLink;
