import { forwardRef, InputHTMLAttributes } from "react";

import { InputContainer, InputFormItem } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <InputFormItem {...props} ref={ref} hasError={!!error} />
        {error && <span>{error}</span>}
      </InputContainer>
    );
  }
);
