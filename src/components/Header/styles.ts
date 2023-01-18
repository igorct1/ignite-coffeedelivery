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
    cursor: pointer;

    display: flex;
    align-items: center;

    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 6px;
    padding: 0.8rem;
    border: none;

    position: relative;
    span {
      position: absolute;
      right: -8px;
      top: -8px;
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["yellow-dark"]};
      padding: 0.3rem 0.6rem;
      border-radius: 50%;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  .user-cart svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
