import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000"
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff"
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

  h3, h1 {
    color: ${(props) => props.theme.fontColor}
  }
  .heading p {
    color: ${(props) => props.theme.fontColor}
  }
  nav {
    background-color: ${(props) => props.theme.body}
  }

  .app__text_color {
    color: ${(props) => props.theme.body}
  }
  .cart {
    color: ${(props) => props.theme.fontColor}
  }
  th: {
    color: ${(props) => props.theme.fontColor}
  }
  

`;
