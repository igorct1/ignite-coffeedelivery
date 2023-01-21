import { Trash } from "phosphor-react";
import React from "react";
import { QuantityButton } from "../../../../../components/QuantityButton";
import { CartContext } from "../../../../../contexts/CartContext";
import { formatPrice } from "../../../../../utils/formatPrice";
import {
  CoffeeQuantityContainer,
  CoffeeTitleQuantity,
  SelectedCoffeeCard,
} from "./styles";

export function CoffeeCartCard({ coffee }: any) {
  const { removeCartItem, changeCoffeeQuantity } =
    React.useContext(CartContext);
  const quantity = coffee.quantity;
  const totalItemPrice = formatPrice(coffee.quantity * coffee.price);

  function handleIncrease() {
    changeCoffeeQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCoffeeQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <SelectedCoffeeCard>
      <img src={`/coffee-delivery/${coffee.photo}`} alt="" />
      <CoffeeTitleQuantity>
        <h2>{coffee.name}</h2>
        <CoffeeQuantityContainer>
          <QuantityButton
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            quantity={quantity}
          />
          <button onClick={handleRemove} className="remove" type="button">
            <Trash />
            Remover
          </button>
        </CoffeeQuantityContainer>
      </CoffeeTitleQuantity>
      <p>R$ {totalItemPrice}</p>
    </SelectedCoffeeCard>
  );
}
