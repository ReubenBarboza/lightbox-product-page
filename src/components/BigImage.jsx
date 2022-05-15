import classNames from "classnames";
import React from "react";

const BigImage = ({ activeImg, setactiveImg, isLightBoxOn }) => {
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
        src={require(`../assets/images/${activeImg.replace("-thumbnail", "")}`)}
        alt={activeImg}
      />
    </div>
  );
};

export default BigImage;
