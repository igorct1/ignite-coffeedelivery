import styled from "styled-components";

export const TitleCheckoutContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  > div {
    h1 {
      font-size: 1.8rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-text"]};
      font-weight: 400;
    }
  }
`;
