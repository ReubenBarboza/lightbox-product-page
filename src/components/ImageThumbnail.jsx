import classNames from "classnames";
import React from "react";
import { useImages } from "../context/images-context";
import { useOverlay } from "../context/overlay-context";

const ImageThumbnail = ({
  image,
  nextSvgPressed = false,
  previousSvgPressed = false,
}) => {
  const { imgName, active } = image;
  const { isLightBoxOn } = useOverlay();
  const { setimgData, setactiveImg, setactiveImgLightBox } = useImages();

  function handleImageThumbnailClick() {
    setimgData((prev) => {
      const current = [...prev];
      current.map((img) => {
        //if the imageThumbnail clicked is same as the one in the list then set its active to true and change all others to false
        if (imgName === img.imgName) {
          img.active = true;
          isLightBoxOn
            ? setactiveImgLightBox(img.imgName)
            : setactiveImg(img.imgName);
        } else img.active = false;
        // if (imgName === img.imgName) {
        //   console.log("x");
        //   if (!previousSvgPressed && !nextSvgPressed) {
        //     img.active = true;
        //     console.log("y");
        //   } else if (previousSvgPressed) {
        //     console.log("z");
        //     i - 1 > 0
        //       ? (images[i - 1].active = true)
        //       : (images[images.length - 1].active = true);
        //   } else if (nextSvgPressed) {
        //     console.log("1");
        //     i + 1 < images.length - 1
        //       ? (images[i + 1].active = true)
        //       : (images[0].active = true);
        //   }
        // } else {
        //   img.active = false;
        //   console.log("2");
        // }
        return img;
      });
      return current;
    });
  }
  return (
    <div
      className={classNames(" w-20 rounded-xl cursor-pointer ", {
        "border-[3px] border-customOrange": active,
        "brightness-125": active && isLightBoxOn,
      })}
      onClick={handleImageThumbnailClick}
    >
      <img
        className={classNames("rounded-md", {
          "opacity-20": active && !isLightBoxOn,
          "opacity-30": active && isLightBoxOn,
        })}
        src={require(`../assets/images/${imgName}`)}
        alt='thumbnail'
      />
    </div>
  );
};

export default ImageThumbnail;
