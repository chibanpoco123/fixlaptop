import React, { createContext, useReducer } from "react";
import { reducerProduct } from "./ProductReducer";
import products from "../../data/products";
const PRODUCTS_DEFAULT = {
  isLoading: true,
  products: products,
  isError: false,
};

export const productText = createContext(PRODUCTS_DEFAULT);

export function ProductContext({ children }) {
  const [productsCT, dispatch] = useReducer(reducerProduct, PRODUCTS_DEFAULT);
  return (
    <productText.Provider value={{ productsCT, dispatch }}>
      {children}
    </productText.Provider>
  );
}
