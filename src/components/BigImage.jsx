import classNames from "classnames";
import React from "react";
import { useImages } from "../context/images-context";
import { useOverlay } from "../context/overlay-context";

const BigImage = () => {
  const { activeImg, activeImgLightBox } = useImages();
  const { isLightBoxOn } = useOverlay();
  return (
    <div>
      <img
        className={classNames(
          "md:w-auto  md:rounded-xl object-cover md:object-contain -z-10 ",
          {
            "max-h-[24rem] min-w-[24rem] w-full cursor-pointer": !isLightBoxOn,
            "max-h-[30rem] min-w-[30rem] w-full": isLightBoxOn,
          }
        )}
        src={
          isLightBoxOn
            ? require(`../assets/images/${activeImgLightBox.replace(
                "-thumbnail",
                ""
              )}`)
            : require(`../assets/images/${activeImg.replace("-thumbnail", "")}`)
        }
        alt={isLightBoxOn ? activeImgLightBox : activeImg}
      />
    </div>
  );
};

export default BigImage;
