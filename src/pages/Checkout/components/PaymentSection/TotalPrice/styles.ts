import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;

  p {
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceBase = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-text"]};
`;

export const PriceTotal = styled.strong`
  display: flex;
  justify-content: space-between;

  font-size: 2rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 700;
`;

export const PriceButton = styled.button`
  color: ${(props) => props.theme["white"]};

  cursor: pointer;
  background: ${(props) => props.theme["yellow"]};

  padding: 1.2rem;

  border: none;
  border-radius: 6px;

  text-transform: uppercase;

  font-size: 1.4rem;
  font-weight: 700;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
