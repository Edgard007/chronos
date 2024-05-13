import { css } from "styled-components";

const Input = css`
  // Input - Autocomplete off and autofill color
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--color-secundary-gray);
    -webkit-box-shadow: 0 0 0px 1000px var(--color-primary) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default Input;
