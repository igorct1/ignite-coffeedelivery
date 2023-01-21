import { ReactNode } from "react";
import { TitleCheckoutContainer } from "./styles";

interface TitleCheckoutProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function TitleCheckout({ ...props }: TitleCheckoutProps) {
  return (
    <TitleCheckoutContainer>
      {props.icon}
      <div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </TitleCheckoutContainer>
  );
}
