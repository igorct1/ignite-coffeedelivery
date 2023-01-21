import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;

  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px 36px 6px 36px;
  padding: 0rem 2rem 2rem 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
  }
`;

export const CoffeeTags = styled.div`
  margin: 1.6rem 0rem;

  display: flex;
  gap: 0.4rem;
  span {
    padding: 0.4rem 0.8rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 9999px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const CoffeeName = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  font-family: "Baloo 2";
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CoffeeDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-label"]};
  margin-top: 0.8rem;
`;

export const CoffeeFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.3rem;
  gap: 2.3rem;
  .price {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme["base-text"]};
    gap: 0.4rem;
  }

  .price p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .price span {
    font-family: "Baloo 2";
    font-size: 2.4rem;
  }
`;

export const CoffeeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .cart {
    border: none;
    background: none;
    background: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 1.2rem;
    cursor: pointer;
  }

  .cart:hover {
    background: ${(props) => props.theme["purple"]};
  }

  .cart svg {
    color: ${(props) => props.theme["white"]};
  }
`;
