import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 4rem;
  background: ${(props) => props.theme["base-card"]};

  border-radius: 6px;
`;

export const AddressFormContainer = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;

  gap: 1.6rem 1.2rem;

  .cep {
    grid-column: span 3;
    max-width: 20rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    .cep {
      grid-column: 1;
      max-width: 100%;
    }

    .street {
      grid-column: 1;
    }

    .complement {
      grid-column: 1;
    }
  }
`;
