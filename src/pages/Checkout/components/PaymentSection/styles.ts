import styled from "styled-components";

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem;
  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px;
`;
