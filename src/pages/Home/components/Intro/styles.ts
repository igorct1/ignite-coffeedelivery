import styled from "styled-components";
export const IntroContainer = styled.section`
  display: flex;

  gap: 5.6rem;

  margin-top: 9.4rem;
`;
export const IntroInfo = styled.div`
  max-width: 576px;

  display: flex;
  flex-direction: column;

  gap: 6.6rem;
`;

export const IntroTitle = styled.div`
  h1 {
    font-size: 4.8rem;
    line-height: 130%;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 2rem;
    line-height: 130%;
    font-family: "Roboto";
    color: ${(props) => props.theme["base-subtitle"]};
    max-width: 55rem;
    margin-top: 1.6rem;
    font-weight: 400;
  }
`;
export const IntroAdvantages = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;

  gap: 1.2rem 2rem;
`;

const ADVANTAGES_BACKGROUND_COLOR = {
  "yellow-dark": "yellow-dark",
  gray: "base-text",
  yellow: "yellow",
  purple: "purple",
} as const;

interface BackgroundProps {
  backgroundColor: keyof typeof ADVANTAGES_BACKGROUND_COLOR;
}

export const IntroAdvantagesItem = styled.div<BackgroundProps>`
  display: flex;
  align-items: center;

  gap: 1.2rem;
  span {
    border-radius: 50%;
    padding: 1rem;
    background: ${(props) =>
      props.theme[ADVANTAGES_BACKGROUND_COLOR[props.backgroundColor]]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span svg {
    color: ${(props) => props.theme["white"]};
  }

  p {
    font-size: 1.6rem;
    font-family: "Roboto";
    line-height: 130%;
  }
`;
export const IntroCoffeeImage = styled.div``;
