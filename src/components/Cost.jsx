import React from "react";

const Cost = () => {
  return (
    <div className='flex justify-between md:flex-col'>
      <div className='flex items-center gap-4'>
        <span className='text-black font-bold lg:text-3xl text-2xl'>
          $125.00
        </span>
        <span className='bg-customPaleOrange text-customOrange font-bold px-2 py-0.5 rounded-md'>
          50%
        </span>
      </div>
      <div className='my-2'>
        <span className=' text-grayishBlue font-bold line-through'>
          $250.00
        </span>
      </div>
    </div>
  );
};

export default Cost;
