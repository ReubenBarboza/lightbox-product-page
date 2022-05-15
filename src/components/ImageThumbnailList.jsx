import React, { useEffect, useState } from "react";
import ImageThumbnail from "./ImageThumbnail";
import d from "../assets/images/image-product-2-thumbnail.jpg";

const ImageThumbnailList = ({
  setactiveImg,
  activeImg,
  isLightBoxOn,
  nextSvgPressed,
  previousSvgPressed,
  images,
  imgData,
  setimgData,
}) => {
  useEffect(() => {
    imgData.forEach((img) => {
      if (img.active === true) {
        setactiveImg(img.imgName);
        return;
      }
    });
  }, [imgData]);

  return (
    <div className='flex gap-6 mt-6'>
      {imgData.map((image, i) => (
        <ImageThumbnail
          key={image.imgName + i}
          image={image}
          setimgData={setimgData}
          isLightBoxOn={isLightBoxOn}
          nextSvgPressed={nextSvgPressed}
          previousSvgPressed={previousSvgPressed}
          images={images}
        />
      ))}
    </div>
  );
};

export default ImageThumbnailList;
