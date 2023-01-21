import { TitleSection } from "../../../../components/TitleSection";
import { AddressSection } from "../AddressSection";
import { PaymentSection } from "../PaymentSection";
import { CompleteContainer, CompleteFormContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteContainer>
      <TitleSection content="Complete seu pedido" />
      <CompleteFormContainer>
        <AddressSection />
        <PaymentSection />
      </CompleteFormContainer>
    </CompleteContainer>
  );
}
