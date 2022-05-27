import classNames from "classnames";
import React from "react";
import { useOverlay } from "../context/overlay-context";
import BigImage from "./BigImage";
import ImageThumbnailList from "./ImageThumbnailList";

const DesktopImages = ({
  handlePreviousSvgClicked,
  handleNextSvgClicked,
  handleLightBox,
}) => {
  const { overlay } = useOverlay();

  return (
    <section
      className={classNames("md:max-w-max relative", {
        "brightness-50": overlay,
      })}
    >
      {/* previous */}
      <div
        onClick={handlePreviousSvgClicked}
        className='md:hidden bg-white w-6 h-6 p-6 cursor-pointer rounded-[50%] inline-flex items-center justify-center flex-auto text-center absolute top-[50%] -translate-y-1/2  left-6 hover:text-customOrange'
      >
        <svg
          className='flex-shrink-0 flex-grow '
          width='12'
          height='18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11 1 3 9l8 8'
            stroke='currentColor'
            strokeWidth='3'
            fill='none'
            fillRule='evenodd'
          />
        </svg>
      </div>
      <div onClick={handleLightBox} className='md:max-w-max overflow-hidden'>
        <BigImage />
      </div>
      {/* next */}
      <div
        onClick={handleNextSvgClicked}
        className='md:hidden bg-white w-6 h-6 p-6 cursor-pointer rounded-[50%] inline-flex items-center justify-center flex-auto text-center absolute top-[50%] -translate-y-1/2 right-6 hover:text-customOrange'
      >
        <svg
          className='flex-shrink-0 flex-grow'
          width='13'
          height='18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m2 1 8 8-8 8'
            stroke='currentColor'
            strokeWidth='3'
            fill='none'
            fillRule='evenodd'
          />
        </svg>
      </div>
      <div className='hidden md:block'>
        <ImageThumbnailList />
      </div>
    </section>
  );
};

export default DesktopImages;
