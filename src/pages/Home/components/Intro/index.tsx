import { ShoppingCart } from "phosphor-react";
import {
  IntroAdvantages,
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
        <IntroAdvantages></IntroAdvantages>
      </IntroInfo>
      <IntroCoffeeImage>
        <img src={coffee} />
      </IntroCoffeeImage>
    </IntroContainer>
  );
}
