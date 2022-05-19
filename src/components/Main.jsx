import React, { useState } from "react";
import classNames from "classnames";
import ImageThumbnailList from "./ImageThumbnailList";
import BigImage from "./BigImage";
import { useOverlay } from "../context/overlay-context";

import LightBox from "./LightBox";

const Main = () => {
  const { overlay, toggleOverlay, toggleLightBox } = useOverlay();

  const [nextSvgPressed] = useState(false);
  const [previousSvgPressed] = useState(false);

  function handleLightBox() {
    toggleLightBox();
    toggleOverlay();
  }

  return (
    <main className={classNames("-z-10 md:my-24 lg:mx-52 md:mx-24")}>
      <section
        className={classNames("", {
          "brightness-50": overlay,
        })}
      >
        <div onClick={handleLightBox} className='h-[calc(100vh_-_97px]'>
          <BigImage />
        </div>
        <div>
          <ImageThumbnailList
            nextSvgPressed={nextSvgPressed}
            previousSvgPressed={previousSvgPressed}
          />
        </div>
      </section>
      {/* <section>write</section> */}

      <LightBox handleLightBox={handleLightBox} />
    </main>
  );
};

export default Main;
