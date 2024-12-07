import React, { createContext, useState, useContext,  } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1, isSelected: false }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const selectAllItems = (isSelected) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => ({ ...item, isSelected }))
    );
  };

  const selectItem = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        selectAllItems,
        selectItem,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
