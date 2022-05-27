import { createContext, useContext, useState } from "react";
import useToggle from "../hooks/useToggle";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [count, setcount] = useState(0);
  const { status: cartClicked, toggle: togglecartClicked } = useToggle(false);
  const [cartCount, setcartCount] = useState(null);

  const increment = () => {
    setcount((prev) => prev + 1);
  };
  const decrement = () => {
    setcount((prev) => {
      prev === 0 ? setcount(0) : setcount(prev - 1);
    });
  };
  const handleCount = ({ isIncrementing }) => {
    isIncrementing ? increment() : decrement();
  };

  const data = [
    {
      productCompany: "SNEAKER COMPANY",
      productName: "Fall Limited Edition Sneakers",
      productDescription: `These low profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand anything the
    whether can offer.`,
      productDiscount: "50%",
      productCostAfterDiscount: "$125.00",
      productCostBeforeDiscount: "$250.00",
    },
  ];

  return (
    <ProductContext.Provider
      value={{
        count,
        handleCount,
        cartCount,
        setcartCount,
        cartClicked,
        togglecartClicked,
        data,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
