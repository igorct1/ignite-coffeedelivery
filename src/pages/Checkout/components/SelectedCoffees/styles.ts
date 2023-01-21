import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  width: 100%;
`;

export const ConfirmSelectedItems = styled.div`
  margin-top: 1.6rem;

  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px 44px 6px 44px;

  padding: 4rem;

  span {
    font-size: 1.8rem;
  }

  > div {
    padding-bottom: 2.4rem;
  }

  div + div {
    margin-top: 2.4rem;
  }
`;
