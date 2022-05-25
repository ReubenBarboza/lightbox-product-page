import React from "react";
import NavLink from "./NavLink";

// before:bg-black before:absolute before:h-screen before:w-screen before:-z-10 before:opacity-70
const MobileNav = ({
  handleHamburgerClick,
  links,
  active,
  setactive,
  isDesktopNav,
  setisDesktopNav,
}) => {
  return (
    <div
      className={`md:hidden fixed top-0 left-0 z-10 w-52 min-h-screen bg-white shadow-lg`}
    >
      <svg
        onClick={handleHamburgerClick}
        className='absolute cursor-pointer md:hidden top-6 left-6'
        width='14'
        height='15'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
          fill='#69707D'
          fillRule='evenodd'
        />
      </svg>
      <nav className='relative top-16 left-6'>
        <ul className='flex flex-col md:hidden gap-5 text-veryDarkBlue font-bold'>
          {links.map((linkLabel, i) => (
            <NavLink
              key={linkLabel + i}
              linkLabel={linkLabel}
              active={active}
              setactive={setactive}
              isDesktopNav={isDesktopNav}
              setisDesktopNav={setisDesktopNav}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
