import React, { createContext, useContext, useState } from 'react';

// ایجاد context
const CartContext = createContext();

// کامپوننت provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// هوک شخصی برای استفاده راحت‌تر از context
export const useCart = () => useContext(CartContext);
