import styled from "styled-components";

export const CoffeeQuantity = styled.div`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 0.8rem;

  > button {
    border: none;
    background: none;
    padding: 1.2rem 0.8rem;
    cursor: pointer;

    color: ${(props) => props.theme["purple"]};
  }
  > button:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  input {
    border: none;
    text-align: center;
    background: none;
    outline: none;
    width: 26px;
    margin: 0 auto;
  }
`;
