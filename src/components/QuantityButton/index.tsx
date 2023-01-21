import { Minus, Plus } from "phosphor-react";
import { CoffeeQuantity } from "./styles";

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityButton({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityButtonProps) {
  return (
    <CoffeeQuantity>
      <button onClick={onDecrease} type="button">
        <Minus size={15} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease} type="button">
        <Plus size={15} />
      </button>
    </CoffeeQuantity>
  );
}
