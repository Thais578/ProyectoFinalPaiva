import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      const itemPrice = Number(item.price); 
      const itemStock = Number(item.stock || 0);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: Math.min(i.quantity + quantity, itemStock) }
            : i
        );
      } else {
        return [...prev, { ...item, quantity: Math.min(quantity, itemStock), price: itemPrice }];
      }
    });
  };

  
  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  
  const clearCart = () => setCart([]);

  
  const totalPrice = () =>
    cart.reduce((acc, i) => acc + Number(i.price) * Number(i.quantity), 0);

  
  const totalQuantity = () =>
    cart.reduce((acc, i) => acc + Number(i.quantity), 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};