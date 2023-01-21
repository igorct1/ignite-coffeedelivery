import { useLocation } from "react-router-dom";
import { confirmOrderFormData } from "../Checkout";

interface LocationType {
  state: confirmOrderFormData;
}

export function CheckoutCompleted() {
  const { state } = useLocation() as unknown as LocationType;
  console.log(state);
  return <h1>CheckoutCompleted</h1>;
}
