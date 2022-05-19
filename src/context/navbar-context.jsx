import React, { createContext, useContext, useState } from "react";
import useToggle from "../hooks/useToggle";

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const { status: isDesktopNavbar, toggle: toggleisDesktopNavbar } =
    useToggle(true);
  const [activeLink, setactiveLink] = useState(null);
  return (
    <NavbarContext.Provider
      value={{
        isDesktopNavbar,
        toggleisDesktopNavbar,
        activeLink,
        setactiveLink,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbar = () => {
  return useContext(NavbarContext);
};

// const useNavbarToggle = () => {
//   return useContext(NavbarToggleContext);
// };

export { NavbarProvider, useNavbar };
