import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin: 4rem 0rem;

  display: grid;
  grid-template-columns: 640px 1fr;
  gap: 3.2rem;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.form``;
