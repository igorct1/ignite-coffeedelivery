import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.2rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
