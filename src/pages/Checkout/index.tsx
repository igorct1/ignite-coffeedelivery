import { CompleteOrder } from "./components/CompleteOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer, FormContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import React from "react";

const confirmFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.string(),
});

export type confirmOrderFormData = zod.infer<
  typeof confirmFormValidationSchema
>;

export function Checkout() {
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmFormValidationSchema),
    defaultValues: {
      paymentMethod: "Cartão de crédito",
    },
  });

  const { clearCart } = React.useContext(CartContext);

  const navigate = useNavigate();
  const { handleSubmit } = confirmOrderForm;

  function handleConfirmSubmit(data: confirmOrderFormData) {
    navigate("/checkout-completed", { state: data });
    clearCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <FormContainer onSubmit={handleSubmit(handleConfirmSubmit)}>
        <CheckoutContainer>
          <CompleteOrder />
          <SelectedCoffees />
        </CheckoutContainer>
      </FormContainer>
    </FormProvider>
  );
}
