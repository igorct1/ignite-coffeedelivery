import React from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeeCardContainer,
  CoffeeTags,
  CoffeeName,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeQuantity,
  CoffeeWrapper,
} from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = React.useState(1);
  const { addCoffeeToCart } = React.useContext(CartContext);

  function onIncrease() {
    setQuantity((state) => state + 1);
  }

  function onDecrease() {
    if (quantity !== 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffee-delivery/${coffee.photo}`} alt="" />
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CoffeeFooter>
        <div className="price">
          <p>R$</p>
          <span>
            {coffee.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <CoffeeWrapper>
          <CoffeeQuantity>
            <button onClick={onDecrease}>{<Minus size={17} />}</button>
            {quantity}
            <button onClick={onIncrease}>{<Plus size={17} />}</button>
          </CoffeeQuantity>
          <button onClick={handleAddToCart} className="cart">
            <ShoppingCart weight="fill" size={17} />
          </button>
        </CoffeeWrapper>
      </CoffeeFooter>
    </CoffeeCardContainer>
  );
}
