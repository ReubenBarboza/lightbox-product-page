import React from "react";
import { useProduct } from "../../context/product-context";

const CartItemDetails = ({ cartCount, setcartCount }) => {
  const {
    data: [{ productName, productCostAfterDiscount }],
  } = useProduct();
  const totalPrice = `$${(
    parseInt(productCostAfterDiscount.substring(1)) * parseInt(cartCount)
  ).toFixed(2)}`;

  const handleDeleteCartItem = () => {
    setcartCount(null);
  };
  return (
    <div className='flex-1 grid grid-rows-2 grid-cols-6 gap-y-4 gap-x-4 items-center p-4'>
      <div className='max-w-[3rem] col-span-1 rounded-md'>
        <img
          className='rounded-md'
          src={require(`../../assets/images/image-product-1-thumbnail.jpg`)}
          alt={"product-1-thumbnail"}
        />
      </div>
      <div className='col-span-4 flex flex-col text-darkGrayishBlue'>
        <span className='whitespace-nowrap '>{productName}</span>
        <div>
          <span className=''>
            {productCostAfterDiscount} x {cartCount}
          </span>
          <span className='font-bold text-veryDarkBlue ml-2'>{totalPrice}</span>
        </div>
      </div>
      <svg
        onClick={handleDeleteCartItem}
        className='justify-self-end cursor-pointer'
        width='14'
        height='16'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <path
            d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
            id='a'
          />
        </defs>
        <use fill='#C3CAD9' fillRule='nonzero' xlinkHref='#a' />
      </svg>
      <button className='col-span-6 bg-customOrange text-white p-3 rounded-xl'>
        Checkout
      </button>
    </div>
  );
};

export default CartItemDetails;
