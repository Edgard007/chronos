import { css } from "styled-components";

const Scroll = css`
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(var(--color-quaternary-rgb), 0.8);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-secundary-gray);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--color-secundary-rgb), 0.8);
  }
`;

export default Scroll;
