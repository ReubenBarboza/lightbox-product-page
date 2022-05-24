import { createContext, useContext, useState } from "react";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [activeImg, setactiveImg] = useState("image-product-1-thumbnail.jpg");
  const [activeImgLightBox, setactiveImgLightBox] = useState(activeImg);
  const images = [
    { imgName: "image-product-1-thumbnail.jpg" },
    { imgName: "image-product-2-thumbnail.jpg" },
    { imgName: "image-product-3-thumbnail.jpg" },
    { imgName: "image-product-4-thumbnail.jpg" },
  ];
  const [imgData, setimgData] = useState(images);
  return (
    <ImagesContext.Provider
      value={{
        activeImg,
        setactiveImg,
        activeImgLightBox,
        setactiveImgLightBox,
        imgData,
        setimgData,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

const useImages = () => {
  return useContext(ImagesContext);
};

export { ImagesProvider, useImages };
