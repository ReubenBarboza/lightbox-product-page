import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import Cost from "./Cost";
import ItemCounter from "./ItemCounter";

const TextContent = () => {
  return (
    <section className='min-w-[30ch] max-w-[50ch]  flex flex-col gap-4'>
      <span className='text-customOrange font-bold'>SNEAKER COMPANY</span>
      <h1 className='text-black font-bold text-4xl '>
        Fall Limited Edition Sneakers
      </h1>
      <p className='text-base text-darkGrayishBlue'>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand anything the
        whether can offer.
      </p>
      <Cost />
      <div className='md:flex md:gap-4'>
        <ItemCounter />
        <AddToCartBtn />
      </div>
    </section>
  );
};

export default TextContent;
