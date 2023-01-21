import styled from "styled-components";

interface BackgroundIconProps {
  backgroundColor: string;
}

export const CheckoutCompletedContainer = styled.div`
  margin-top: 8rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const CheckoutCompletedTitle = styled.div`
  h1 {
    font-size: 3.2rem;
    font-family: "Baloo 2";
    font-weight: 900;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  p {
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const CheckoutOrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutOrderInfo = styled.div`
  padding: 4rem;
  margin-top: 4rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme["background"]};
  min-width: 52rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const CheckoutOrderInfoDiv = styled.div<BackgroundIconProps>`
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
  }
  > div p span {
    font-weight: 700;
  }

  svg {
    color: red;
  }

  .icon {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props["backgroundColor"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;
