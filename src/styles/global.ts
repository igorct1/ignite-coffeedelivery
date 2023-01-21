import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;

  background: ${(props) => props.theme["background"]};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;

}

html {
  font-size: 62.5%;

  @media(max-width: 1024px) {
    font-size: 54.69%;
  }

  @media(max-width: 420px) {
    font-size: 51%;
  }
}
`;
