import classNames from "classnames";
import React from "react";
import { useImages } from "../../context/images-context";

const ImageThumbnailLightBox = ({ image }) => {
  const { imgName } = image;
  const { imgData, setactiveImgLightBox, activeImgLightBox } = useImages();

  function handleImageThumbnailLightBoxClick() {
    imgData.forEach((img) => {
      if (img.imgName === imgName) {
        setactiveImgLightBox(imgName);
      }
    });
  }

  return (
    <div
      className={classNames(" w-20 rounded-xl cursor-pointer ", {
        "border-[3px] border-customOrange brightness-125":
          imgName === activeImgLightBox,
      })}
      onClick={handleImageThumbnailLightBoxClick}
    >
      <img
        className={classNames("rounded-md ", {
          "opacity-30": imgName === activeImgLightBox,
          "hover:brightness-105 hover:opacity-50":
            imgName !== activeImgLightBox,
        })}
        src={require(`../../assets/images/${imgName}`)}
        alt={imgName}
      />
    </div>
  );
};

export default ImageThumbnailLightBox;
