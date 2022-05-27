import React from "react";
import { useProduct } from "../context/product-context";

const Cost = () => {
  const {
    data: [
      { productCostAfterDiscount, productDiscount, productCostBeforeDiscount },
    ],
  } = useProduct();

  return (
    <div className='flex justify-between md:flex-col'>
      <div className='flex items-center gap-4'>
        <span className='text-black font-bold lg:text-3xl text-2xl'>
          {productCostAfterDiscount}
        </span>
        <span className='bg-customPaleOrange text-customOrange font-bold px-2 py-0.5 rounded-md'>
          {productDiscount}
        </span>
      </div>
      <div className='my-2'>
        <span className=' text-grayishBlue font-bold line-through'>
          {productCostBeforeDiscount}
        </span>
      </div>
    </div>
  );
};

export default Cost;
