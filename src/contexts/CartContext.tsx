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

const LOCALSTORAGE_COFFEE_KEY = "coffeeDelivery";

export const CartContextStorage = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem(LOCALSTORAGE_COFFEE_KEY);
    if (storedItems) {
      return JSON.parse(storedItems);
    }
    return [];
  });
  const cartQuantity = cartItems.length;
  const cartItemsPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  React.useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_COFFEE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

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

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex((cartItem) => {
      if (coffee.id === cartItem.id) {
        return cartItem;
      }
    });

    if (coffeeAlreadyExistInCart < 0) {
      setCartItems((state) => [...state, coffee]);
    } else {
      const newCartList = cartItems.map((cartItem) => {
        if (cartItem.id === coffee.id) {
          return {
            ...cartItem,
            quantity: (cartItem.quantity += coffee.quantity),
          };
        } else {
          return cartItem;
        }
      });
      setCartItems(newCartList);
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
