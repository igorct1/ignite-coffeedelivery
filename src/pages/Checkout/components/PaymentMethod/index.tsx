import React from "react";
import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodContainer } from "./styles";
import { PaymentMethodInput } from "./PaymentMethodInput";

const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={15} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={15} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={15} />,
  },
};

export function PaymentMethod() {
  const [method, setMethod] = React.useState("Cartão de cŕedito");
  function onInputChange(method: string) {
    setMethod(method);
  }

  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={key}
          label={label}
          icon={icon}
          method={key}
          onInputChange={onInputChange}
          isSelected={method}
        />
      ))}
    </PaymentMethodContainer>
  );
}
