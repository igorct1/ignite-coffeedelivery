import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  IntroAdvantages,
  IntroAdvantagesItem,
  IntroCoffeeImage,
  IntroContainer,
  IntroInfo,
  IntroTitle,
} from "./styles";

import coffee from "../../../../assets/coffee.png";

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfo>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </IntroTitle>
        <IntroAdvantages>
          <IntroAdvantagesItem backgroundColor="yellow-dark">
            <span>
              <ShoppingCart weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </IntroAdvantagesItem>
          <IntroAdvantagesItem backgroundColor="gray">
            <span>
              <Package weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </IntroAdvantagesItem>
          <IntroAdvantagesItem backgroundColor="yellow">
            <span>
              <Timer weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </IntroAdvantagesItem>
          <IntroAdvantagesItem backgroundColor="purple">
            <span>
              <Coffee weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </IntroAdvantagesItem>
        </IntroAdvantages>
      </IntroInfo>
      <IntroCoffeeImage>
        <img src={coffee} />
      </IntroCoffeeImage>
    </IntroContainer>
  );
}
