import classNames from "classnames";
import React from "react";
import { useImages } from "../../context/images-context";
import { useOverlay } from "../../context/overlay-context";

const BigImageLightBox = () => {
  const { activeImgLightBox } = useImages();

  return (
    <div>
      <img
        className={classNames(
          "md:w-auto  md:rounded-xl object-cover md:object-contain -z-10 max-h-[30rem] min-w-[30rem] w-full"
        )}
        src={require(`../../assets/images/${activeImgLightBox.replace(
          "-thumbnail",
          ""
        )}`)}
        alt={activeImgLightBox}
      />
    </div>
  );
};

export default BigImageLightBox;
