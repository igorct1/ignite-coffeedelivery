import styled from "styled-components";
export const IntroContainer = styled.section`
  display: flex;
  gap: 5.6rem;
  justify-content: space-between;

  margin-top: 9.4rem;
`;
export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6.6rem;
  flex: 2;
  width: 80rem;
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
export const IntroAdvantages = styled.div``;
export const IntroCoffeeImage = styled.div``;
