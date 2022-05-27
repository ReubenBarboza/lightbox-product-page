import React from "react";
import { useProduct } from "../../context/product-context";
import CartItemDetails from "./CartItemDetails";

const CartItem = () => {
  const { cartCount, setcartCount } = useProduct();
  return (
    <div className='flex-1 flex justify-center items-center h-auto'>
      {!cartCount && (
        <span className='flex-1 text-center'>Your cart is empty.</span>
      )}
      {cartCount && (
        <CartItemDetails cartCount={cartCount} setcartCount={setcartCount} />
      )}
    </div>
  );
};

export default CartItem;
