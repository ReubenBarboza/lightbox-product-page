import classNames from "classnames";
import React from "react";
import { useImages } from "../context/images-context";

const BigImage = () => {
  const { activeImg } = useImages();

  return (
    <>
      <img
        className={classNames(
          "md:w-auto  md:rounded-xl object-cover object-center md:object-contain -z-10 md:max-h-[24rem] md:min-w-[24rem] max-h-[20rem] min-w-[24rem] w-full md:cursor-pointer"
        )}
        src={require(`../assets/images/${activeImg.replace("-thumbnail", "")}`)}
        alt={activeImg}
      />
    </>
  );
};

export default BigImage;
