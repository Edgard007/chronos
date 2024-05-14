import { css } from "styled-components";

const Butterup = css`
  .butteruptoast {
    background-color: var(--color-tertiary) !important;
    border-color: rgba(var(--color-secundary-rgb), 0.2);

    .title {
      color: var(--color-secundary);
    }

    .message {
      color: rgba(var(--color-secundary-rgb), 0.6);
    }
  }

  .success {
    border-color: rgba(var(--color-green-rgb), 0.6) !important;
  }

  .info {
    border-color: rgba(var(--color-blue-rgb), 0.6) !important;
  }

  .error {
    border-color: rgba(var(--color-red-rgb), 0.6) !important;
  }

  .warning {
    border-color: rgba(var(--color-orange-rgb), 0.6) !important;
  }
`;

export default Butterup;
