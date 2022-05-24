import React from "react";
import { useImages } from "../../context/images-context";
import ImageThumbnailLightBox from "./ImageThumbnailLightBox";

const ImageThumbnailListLightBox = () => {
  const { imgData } = useImages();

  return (
    <div className='flex gap-6 mt-6'>
      {imgData.map((image, i) => (
        <ImageThumbnailLightBox key={image.imgName + i} image={image} />
      ))}
    </div>
  );
};

export default ImageThumbnailListLightBox;
