import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeCardContainer,
  CoffeeTags,
  CoffeeName,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeQuantity,
  CoffeeWrapper,
} from "./styles";

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

export function CoffeCard({ coffee }: CoffeeProps) {
  return (
    <CoffeCardContainer>
      <img src={`/coffee-delivery/${coffee.photo}`} alt="" />
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span>{tag}</span>
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
            <button>{<Minus size={17} />}</button>
            {1}
            <button>{<Plus size={17} />}</button>
          </CoffeeQuantity>
          <button className="cart">
            <ShoppingCart weight="fill" size={17} />
          </button>
        </CoffeeWrapper>
      </CoffeeFooter>
    </CoffeCardContainer>
  );
}
