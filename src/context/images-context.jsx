import { createContext, useContext, useState } from "react";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [activeImg, setactiveImg] = useState("image-product-1-thumbnail.jpg");
  const [activeImgLightBox, setactiveImgLightBox] = useState(
    "image-product-1-thumbnail.jpg"
  );
  const images = [
    { imgName: "image-product-1-thumbnail.jpg", active: true },
    { imgName: "image-product-2-thumbnail.jpg", active: false },
    { imgName: "image-product-3-thumbnail.jpg", active: false },
    { imgName: "image-product-4-thumbnail.jpg", active: false },
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
