import { CurrencyDollar } from "phosphor-react";
import { TitleCheckout } from "../../../../components/TitleCheckout";
import { PaymentMethod } from "../PaymentMethod";

import { PaymentContent } from "./styles";

export function PaymentSection() {
  return (
    <PaymentContent>
      <TitleCheckout
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyDollar size={22} color="#8047F8" />}
      />
      <PaymentMethod />
    </PaymentContent>
  );
}
