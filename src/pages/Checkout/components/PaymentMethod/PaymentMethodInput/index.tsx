import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "./styles";

interface PaymentMethodInputProps {
  label: string;
  icon: ReactNode;
  method: string;
  isSelected: string;
  onInputChange: (method: string) => void;
}

export function PaymentMethodInput({
  label,
  icon,
  method,
  isSelected,
  onInputChange,
}: PaymentMethodInputProps) {
  const { register } = useFormContext();
  function handleClickOnInput(event: any) {
    onInputChange(event.target.value);
  }
  return (
    <Label htmlFor={method} className={isSelected === label ? "selected" : ""}>
      <input
        id={method}
        type="radio"
        value={label}
        onClick={handleClickOnInput}
        {...register("paymentMethod")}
      />
      {icon}
      {label}
    </Label>
  );
}
