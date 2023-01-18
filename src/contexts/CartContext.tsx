import React, { ReactNode } from "react";
export const CartContext = React.createContext({} as CartContextProviderType);
import { Coffee } from "../pages/Home/components/CoffeeCard";

interface CartItem extends Coffee {
  quantity: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface CartContextProviderType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContextStorage = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  function addCoffeeToCart(cartItem: CartItem) {
    setCartItems((state) => [...state, cartItem]);
  }

  const cartQuantity = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
