import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import { useImages } from "../context/images-context";

const ImageThumbnailList = () => {
  const { imgData } = useImages();

  return (
    <div className='flex gap-6 mt-6'>
      {imgData.map((image, i) => (
        <ImageThumbnail key={image.imgName + i} image={image} />
      ))}
    </div>
  );
};

export default ImageThumbnailList;
