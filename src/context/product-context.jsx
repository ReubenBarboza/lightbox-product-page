import { createContext, useContext, useState } from "react";
// import useToggle from "../hooks/useToggle";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [count, setcount] = useState(0);
  //   const { status: addedToCart, toggle: toggleaddedToCart } = useToggle(false);
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

  return (
    <ProductContext.Provider
      value={{
        count,
        handleCount,
        cartCount,
        setcartCount,
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
