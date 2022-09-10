import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
        background-color: ${({ theme }) => theme["gray-900"]};
        color: ${({ theme }) => theme["gray-200"]};
        -webkit-font-smoothing: antialiased;
    }
    :focus {
        outline: 0;
        box-shadow:  0 0 0 1px ${({ theme }) => theme["blue-700"]};
        border-radius: 5px;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
