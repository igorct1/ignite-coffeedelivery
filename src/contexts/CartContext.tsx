import React, { ReactNode } from "react";
export const CartContext = React.createContext({} as CartContextProviderType);
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface CartContextProviderType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsPrice: number;
  clearCart: () => void;
  removeCartItem: (cartItemId: number) => void;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCoffeeQuantity: (
    coffeeItemId: number,
    type: "increase" | "decrease"
  ) => void;
}

export const CartContextStorage = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const cartQuantity = cartItems.length;
  const cartItemsPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  function changeCoffeeQuantity(
    coffeeItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCartList = cartItems.map((cartItem) => {
      if (cartItem.id === coffeeItemId) {
        return {
          ...cartItem,
          quantity:
            type === "increase" ? cartItem.quantity + 1 : cartItem.quantity - 1,
        };
      } else {
        return cartItem;
      }
    });

    setCartItems(newCartList);
  }

  function addCoffeeToCart(cartItem: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (coffee) => cartItem.id === coffee.id
    );

    if (coffeeAlreadyExistsInCart < 0) {
      setCartItems((state) => [...state, cartItem]);
    }
  }

  function removeCartItem(cartItemId: number) {
    const newCartList = cartItems.filter((item) => {
      if (item.id !== cartItemId) {
        return item;
      }
    });
    setCartItems(newCartList);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        removeCartItem,
        cartItemsPrice,
        changeCoffeeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
