import React from "react";

import CartItem from "./CartItem";

const CartSection = () => {
  return (
    <section className='fixed right-6 top-24 md:absolute lg:-right-32 md:-right-20 md:top-10 w-[22rem] h-60 border drop-shadow-2xl rounded-xl bg-white flex flex-col'>
      <div className='border-b-2 border-darkGrayishBlue/20 p-4 font-bold'>
        Cart
      </div>
      <CartItem />
    </section>
  );
};

export default CartSection;
