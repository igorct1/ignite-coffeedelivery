import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { InputForm } from "../../../../components/InputForm";
import { TitleCheckout } from "../../../../components/TitleCheckout";
import { AddressContainer, AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}
export function AddressSection() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressContainer>
      <TitleCheckout
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPinLine size={22} color="#C47F17" />}
      />
      <AddressFormContainer>
        <InputForm
          placeholder="CEP"
          type="string"
          className="cep"
          {...register("cep")}
          error={errors.cep?.message}
        />
        <InputForm
          placeholder="Rua"
          type="string"
          className="street"
          {...register("street")}
          error={errors.street?.message}
        />
        <InputForm
          placeholder="Número"
          type="string"
          {...register("number")}
          error={errors.number?.message}
        />
        <InputForm
          placeholder="Complemento"
          type="string"
          className="complement"
          {...register("complement")}
          error={errors.complement?.message}
        />
        <InputForm
          placeholder="Bairro"
          type="string"
          {...register("district")}
          error={errors.district?.message}
        />
        <InputForm
          placeholder="Cidade"
          type="string"
          {...register("city")}
          error={errors.city?.message}
        />
        <InputForm
          placeholder="UF"
          type="string"
          {...register("uf")}
          error={errors.uf?.message}
        />
      </AddressFormContainer>
    </AddressContainer>
  );
}
