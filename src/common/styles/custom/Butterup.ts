import { css } from "styled-components";

const Butterup = css`
  .butteruptoast {
    background-color: var(--color-tertiary);
    border-color: rgba(var(--color-secundary-rgb), 0.2);

    .title {
      color: var(--color-blue);
    }

    .message {
      color: var(--color-secundary);
    }
  }
`;

export default Butterup;
