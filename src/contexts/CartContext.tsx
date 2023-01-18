import React, { ReactNode } from "react";

export const CartContext = React.createContext("");

interface ChildrenProps {
  children: ReactNode;
}

export const CartContextStorage = ({ children }: ChildrenProps) => {
  return <CartContext.Provider value="">{children}</CartContext.Provider>;
};
