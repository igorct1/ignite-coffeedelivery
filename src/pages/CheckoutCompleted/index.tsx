import { useLocation } from "react-router-dom";
import { confirmOrderFormData } from "../Checkout";
import {
  CheckoutCompletedContainer,
  CheckoutCompletedTitle,
  CheckoutOrderInfo,
  CheckoutOrderInfoContainer,
  CheckoutOrderInfoDiv,
} from "./style";

import orderImage from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

interface LocationType {
  state: confirmOrderFormData;
}

export function CheckoutCompleted() {
  const { state } = useLocation() as unknown as LocationType;

  if (!state) return null;

  return (
    <CheckoutCompletedContainer>
      <CheckoutCompletedTitle>
        <h1>Uhu! pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </CheckoutCompletedTitle>
      <CheckoutOrderInfoContainer>
        <CheckoutOrderInfo>
          <CheckoutOrderInfoDiv backgroundColor="#8047F8">
            <span className="icon">
              <MapPin size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {state.street}, {state.number}
                </span>
              </p>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            </div>
          </CheckoutOrderInfoDiv>
          <CheckoutOrderInfoDiv backgroundColor="#DBAC2C">
            <span className="icon">
              <Timer size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20min - 30min</strong>
            </div>
          </CheckoutOrderInfoDiv>
          <CheckoutOrderInfoDiv backgroundColor="#C47F17">
            <span className="icon">
              <CurrencyDollar size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{state.paymentMethod}</strong>
            </div>
          </CheckoutOrderInfoDiv>
        </CheckoutOrderInfo>
        <img src={orderImage} alt="" />
      </CheckoutOrderInfoContainer>
    </CheckoutCompletedContainer>
  );
}
