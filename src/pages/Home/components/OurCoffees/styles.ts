import styled from "styled-components";

export const OurCoffeesContainer = styled.div`
  h1 {
    font-family: "Baloo 2";
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const OurCoffeesContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 3.4rem;

  gap: 4rem 3.2rem;
  padding-bottom: 4rem;
`;
