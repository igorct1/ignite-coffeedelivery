import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0rem;

  .user-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .user-location {
    padding: 0.8rem;
    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    border-radius: 6px;

    font-size: 1.2rem;
  }

  .user-location svg {
    color: ${(props) => props.theme["purple"]};
  }

  .user-cart {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 6px;
  }

  .user-cart svg {
    color: ${(props) => props.theme["yellow-dark"]};
    cursor: pointer;
  }
`;
