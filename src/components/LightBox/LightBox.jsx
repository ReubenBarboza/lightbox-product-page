import classNames from "classnames";
import React from "react";
import { useImages } from "../../context/images-context";

import BigImageLightBox from "./BigImageLightBox";

import ImageThumbnailListLightBox from "./ImageThumbnailListLightBox";

const LightBox = ({ handleLightBoxClose }) => {
  const { setactiveImgLightBox, imgData } = useImages();

  function handlePreviousSvgClicked() {
    setactiveImgLightBox((prev) => {
      let imageNumber = prev.split("-")[2];

      return imageNumber > 1
        ? prev.replace(imageNumber, parseInt(imageNumber) - 1)
        : prev.replace(imageNumber, imgData.length);
    });
  }

  function handleNextSvgClicked() {
    setactiveImgLightBox((prev) => {
      let imageNumber = prev.split("-")[2];

      return imageNumber < imgData.length
        ? prev.replace(imageNumber, parseInt(imageNumber) + 1)
        : prev.replace(imageNumber, 1);
    });
  }

  return (
    <>
      <aside
        className={classNames(
          "absolute top-0 left-0 w-full h-screen overflow-hidden"
        )}
      >
        <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
          <div className='relative'>
            {/* previous */}
            <div
              onClick={handlePreviousSvgClicked}
              className='bg-white w-6 h-6 p-6 cursor-pointer rounded-[50%] inline-flex items-center justify-center flex-auto text-center absolute top-[50%] -translate-y-1/2 -left-6 hover:text-customOrange'
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
            <BigImageLightBox />
            {/* next */}
            <div
              onClick={handleNextSvgClicked}
              className='bg-white w-6 h-6 p-6 cursor-pointer rounded-[50%] inline-flex items-center justify-center flex-auto text-center absolute top-[50%] -translate-y-1/2 -right-6 hover:text-customOrange'
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
            {/* close */}
            <svg
              className='absolute -top-6 right-0 text-customOrange hover:text-white cursor-pointer'
              onClick={handleLightBoxClose}
              width='14'
              height='15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                fill='currentColor'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='z-10'>
            <ImageThumbnailListLightBox />
          </div>
        </div>
      </aside>
    </>
  );
};

export default LightBox;
