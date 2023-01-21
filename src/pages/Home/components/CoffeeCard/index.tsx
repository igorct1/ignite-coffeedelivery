import React from "react";
import { ShoppingCart } from "phosphor-react";
import {
  CoffeeCardContainer,
  CoffeeTags,
  CoffeeName,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeWrapper,
} from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { formatPrice } from "../../../../utils/formatPrice";
import { QuantityButton } from "../../../../components/QuantityButton";

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

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
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
          <span>{formatPrice(coffee.price)}</span>
        </div>
        <CoffeeWrapper>
          <QuantityButton
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart} className="cart">
            <ShoppingCart weight="fill" size={17} />
          </button>
        </CoffeeWrapper>
      </CoffeeFooter>
    </CoffeeCardContainer>
  );
}
