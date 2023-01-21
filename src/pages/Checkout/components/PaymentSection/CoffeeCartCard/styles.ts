import styled from "styled-components";

export const SelectedCoffeeCard = styled.div`
  display: flex;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    width: 64px;
    height: 64px;
  }

  p {
    flex: 1;
    text-align: right;
    font-size: 1.6rem;
    font-weight: 700;
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;
    p {
      margin-top: 2rem;
    }
  }
`;

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  .remove {
    border: none;
    background: ${(props) => props.theme["base-button"]};
    padding: 1.2rem 0.8rem;
    cursor: pointer;
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    border-radius: 6px;
  }

  .remove:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  .remove svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const CoffeeTitleQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-left: 2rem;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
