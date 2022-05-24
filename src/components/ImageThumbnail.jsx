import classNames from "classnames";
import React from "react";
import { useImages } from "../context/images-context";

const ImageThumbnail = ({ image }) => {
  const { imgName } = image;

  const { imgData, setactiveImg, activeImg } = useImages();

  function handleImageThumbnailClick() {
    imgData.forEach((img) => {
      if (img.imgName === imgName) {
        setactiveImg(imgName);
      }
    });
  }

  return (
    <div
      className={classNames(" w-[4.85rem] rounded-xl cursor-pointer ", {
        "border-[3px] border-customOrange brightness-125":
          imgName === activeImg,
      })}
      onClick={handleImageThumbnailClick}
    >
      <img
        className={classNames("rounded-md", {
          "opacity-20": imgName === activeImg,
          "hover:brightness-105 hover:opacity-50": imgName !== activeImg,
        })}
        src={require(`../assets/images/${imgName}`)}
        alt='thumbnail'
      />
    </div>
  );
};

export default ImageThumbnail;
