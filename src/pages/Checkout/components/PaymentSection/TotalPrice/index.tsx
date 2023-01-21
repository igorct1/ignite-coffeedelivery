import React from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import { formatPrice } from "../../../../../utils/formatPrice";
import { PriceBase, PriceButton, PriceContainer, PriceTotal } from "./styles";

export function TotalPrice() {
  const { cartItemsPrice } = React.useContext(CartContext);
  const total = cartItemsPrice + 3.5;

  return (
    <PriceContainer>
      <PriceBase>
        Total de itens <span>R$ {formatPrice(cartItemsPrice)}</span>
      </PriceBase>
      <PriceBase>
        Entrega <span>R$ 3,50</span>
      </PriceBase>
      <PriceTotal>
        Total <span>R$ {formatPrice(total)}</span>
      </PriceTotal>
      <PriceButton type="submit">Confirmar pedido</PriceButton>
    </PriceContainer>
  );
}
