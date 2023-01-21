import React from "react";
import { TitleSection } from "../../../../components/TitleSection";
import { CartContext } from "../../../../contexts/CartContext";
import { CoffeeCartCard } from "../PaymentSection/CoffeeCartCard";
import { TotalPrice } from "../PaymentSection/TotalPrice";

import { ConfirmSelectedItems, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <SelectedCoffeesContainer>
      <TitleSection content="Cafés selecionados" />
      {!cartItems.length && (
        <ConfirmSelectedItems>
          <span>Não existem itens no carrinho. </span>
        </ConfirmSelectedItems>
      )}
      {cartItems.length > 0 && (
        <ConfirmSelectedItems>
          {cartItems.map((item) => (
            <CoffeeCartCard key={item.id} coffee={item} />
          ))}
          <TotalPrice />
        </ConfirmSelectedItems>
      )}
    </SelectedCoffeesContainer>
  );
}
