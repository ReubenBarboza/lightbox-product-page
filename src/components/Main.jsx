import React, { useEffect, useState } from "react";
import classNames from "classnames";
import ImageThumbnailList from "./ImageThumbnailList";
import BigImage from "./BigImage";

const Main = ({ overlay, setoverlay }) => {
  const [activeImg, setactiveImg] = useState("image-product-1-thumbnail.jpg");
  const [activeImgLightBox, setactiveImgLightBox] = useState(
    "image-product-1-thumbnail.jpg"
  );
  const [isLightBoxOn, setisLightBoxOn] = useState(false);
  const [nextSvgPressed, setnextSvgPressed] = useState(false);
  const [previousSvgPressed, setpreviousSvgPressed] = useState(false);

  const images = [
    { imgName: "image-product-1-thumbnail.jpg", active: true },
    { imgName: "image-product-2-thumbnail.jpg", active: false },
    { imgName: "image-product-3-thumbnail.jpg", active: false },
    { imgName: "image-product-4-thumbnail.jpg", active: false },
  ];
  const [imgData, setimgData] = useState(images);

  function handleLightBox() {
    setisLightBoxOn((prev) => !prev);
    setoverlay((prev) => !prev);
  }

  return (
    <main className={classNames("-z-10 md:my-24 lg:mx-52 md:mx-24")}>
      <section
        className={classNames("", {
          "brightness-50": overlay,
        })}
      >
        <div onClick={() => handleLightBox()} className='h-[calc(100vh_-_97px]'>
          <BigImage setactiveImg={setactiveImg} activeImg={activeImg} />
        </div>
        <div>
          <ImageThumbnailList
            setactiveImg={setactiveImg}
            activeImg={activeImg}
          />
        </div>
      </section>
      {/* <section>write</section> */}

      {isLightBoxOn && (
        <aside
          className={classNames(
            "absolute top-0 left-0 w-full h-screen overflow-hidden"
          )}
        >
          <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
            <div className='relative'>
              {/* previous */}
              <div
                onClick={() => {
                  setactiveImgLightBox((prev) => {
                    let imageNumber = prev.split("-")[2];
                    return imageNumber > 1
                      ? prev.replace(imageNumber, imageNumber - 1)
                      : prev.replace(imageNumber, images.length);
                  });
                }}
                className='bg-white w-6 h-6 p-6 cursor-pointer rounded-[50%] inline-flex items-center justify-center flex-auto text-center absolute top-[50%] -translate-y-1/2 -left-6 hover:text-customOrange'
              >
                <svg
                  className='flex-shrink-0 flex-grow '
                  width='12'
                  height='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11 1 3 9l8 8'
                    stroke='currentColor'
                    strokeWidth='3'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </div>
              <BigImage
                setactiveImg={setactiveImgLightBox}
                activeImg={activeImgLightBox}
                isLightBoxOn={isLightBoxOn}
              />
              {/* next */}
              <div
                onClick={() => {
                  setnextSvgPressed(true);
                  setpreviousSvgPressed(false);
                }}
                className='bg-white w-6 h-6 p-6 cursor-pointer rounded-[50%] inline-flex items-center justify-center flex-auto text-center absolute top-[50%] -translate-y-1/2 -right-6 hover:text-customOrange'
              >
                <svg
                  className='flex-shrink-0 flex-grow'
                  width='13'
                  height='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='m2 1 8 8-8 8'
                    stroke='currentColor'
                    strokeWidth='3'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </div>
              {/* close */}
              <svg
                className='absolute -top-6 right-0 text-customOrange cursor-pointer'
                onClick={handleLightBox}
                width='14'
                height='15'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                  fill='currentColor'
                  fillRule='evenodd'
                />
              </svg>
            </div>
            <div className='z-10'>
              <ImageThumbnailList
                setactiveImg={setactiveImgLightBox}
                activeImg={activeImgLightBox}
                isLightBoxOn={isLightBoxOn}
                nextSvgPressed={nextSvgPressed}
                previousSvgPressed={previousSvgPressed}
                images={images}
                imgData={imgData}
                setimgData={setimgData}
              />
            </div>
          </div>
        </aside>
      )}
    </main>
  );
};

export default Main;
