import React, { createContext, useContext, useState } from "react";
import products from "../data/products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(products);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
