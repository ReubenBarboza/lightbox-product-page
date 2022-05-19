import React, { useEffect } from "react";
import ImageThumbnail from "./ImageThumbnail";
import { useImages } from "../context/images-context";
import { useOverlay } from "../context/overlay-context";

const ImageThumbnailList = ({ nextSvgPressed, previousSvgPressed }) => {
  const { setactiveImg, imgData, setactiveImgLightBox } = useImages();
  const { isLightBoxOn } = useOverlay();

  // useEffect(() => {
  //   imgData.forEach((img) => {
  //     if (img.active === true && !isLightBoxOn) {
  //       setactiveImg(img.imgName);
  //       return;
  //     } else if (img.active === true && isLightBoxOn) {
  //       setactiveImgLightBox(img.imgName);
  //       return;
  //     }
  //   });
  // }, [imgData]);

  return (
    <div className='flex gap-6 mt-6'>
      {imgData.map((image, i) => (
        <ImageThumbnail
          key={image.imgName + i}
          image={image}
          nextSvgPressed={nextSvgPressed}
          previousSvgPressed={previousSvgPressed}
        />
      ))}
    </div>
  );
};

export default ImageThumbnailList;
