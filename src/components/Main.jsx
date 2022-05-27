import React from "react";
import classNames from "classnames";

import { useOverlay } from "../context/overlay-context";

import LightBox from "./LightBox/LightBox";
import { useImages } from "../context/images-context";
import DesktopImages from "./DesktopImages";
import TextContent from "./TextContent";
import { useProduct } from "../context/product-context";

const Main = () => {
  const { toggleOverlay, toggleLightBox, isLightBoxOn } = useOverlay();
  const { togglecartClicked } = useProduct();
  const {
    activeImg,
    setactiveImg,
    activeImgLightBox,
    setactiveImgLightBox,
    imgData,
  } = useImages();

  function handleLightBox() {
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) return;
    toggleLightBox();
    toggleOverlay();
    setactiveImgLightBox(activeImg);
    togglecartClicked(false);
  }
  function handleLightBoxClose() {
    toggleLightBox();
    toggleOverlay();
    setactiveImg(activeImgLightBox);
  }

  function handlePreviousSvgClicked() {
    setactiveImg((prev) => {
      let imageNumber = prev.split("-")[2];

      return imageNumber > 1
        ? prev.replace(imageNumber, parseInt(imageNumber) - 1)
        : prev.replace(imageNumber, imgData.length);
    });
  }

  function handleNextSvgClicked() {
    setactiveImg((prev) => {
      let imageNumber = prev.split("-")[2];

      return imageNumber < imgData.length
        ? prev.replace(imageNumber, parseInt(imageNumber) + 1)
        : prev.replace(imageNumber, 1);
    });
  }

  return (
    <main
      className={classNames(
        "-z-10 md:my-24 md:mx-6 lg:mx-36 md:flex md:justify-evenly ld:gap-16 md:gap-8 "
      )}
    >
      <DesktopImages
        handlePreviousSvgClicked={handlePreviousSvgClicked}
        handleNextSvgClicked={handleNextSvgClicked}
        handleLightBox={handleLightBox}
      />
      <div className='md:pt-10 p-6 flex flex-col items-center '>
        <TextContent />
      </div>

      {isLightBoxOn && <LightBox handleLightBoxClose={handleLightBoxClose} />}
    </main>
  );
};

export default Main;
