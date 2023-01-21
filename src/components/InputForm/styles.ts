import styled, { css } from "styled-components";
interface InputContainerProps {
  hasError: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme["base-error"]};
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const InputFormItem = styled.input<InputContainerProps>`
  padding: 1.2rem;
  font-size: 1.4rem;
  background: ${(props) => props.theme["base-input"]};

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  outline: none;
  color: ${(props) => props.theme["base-text"]};

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus-within {
    border-color: ${(props) => props.theme["base-error"]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme["base-error"]};
    `}
`;
