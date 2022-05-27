import classNames from "classnames";
import React from "react";
import { useOverlay } from "../context/overlay-context";
import { useProduct } from "../context/product-context";
import AddToCartBtn from "./AddToCartBtn";
import Cost from "./Cost";
import ItemCounter from "./ItemCounter";

const TextContent = () => {
  const { overlay } = useOverlay();
  const {
    data: [{ productCompany, productName, productDescription }],
  } = useProduct();
  return (
    <section
      className={classNames("min-w-[30ch] max-w-[50ch]  flex flex-col gap-4", {
        "-z-10": overlay,
      })}
    >
      <span className='text-customOrange font-bold'>{productCompany}</span>
      <h1 className='text-black font-bold text-4xl '>{productName}</h1>
      <p className='text-base text-darkGrayishBlue'>{productDescription}</p>
      <Cost />
      <div className='md:flex md:gap-4'>
        <ItemCounter />
        <AddToCartBtn />
      </div>
    </section>
  );
};

export default TextContent;
