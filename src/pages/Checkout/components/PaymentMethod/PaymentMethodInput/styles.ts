import styled from "styled-components";

export const Label = styled.label`
  input {
    display: none;
  }

  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 1.6rem;

  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};

  background: ${(props) => props.theme["base-button"]};

  border-radius: 6px;

  cursor: pointer;

  width: 100%;

  text-transform: uppercase;

  border: 1px solid transparent;
  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &.selected {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;
