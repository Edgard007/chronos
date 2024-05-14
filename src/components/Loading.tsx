import styled from "styled-components";

const Loading = () => (
  <Wrapper>
    <div className="loader" />
  </Wrapper>
);

const Wrapper = styled.section`
  position: fixed;
  z-index: var(--z-high);
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-tertiary);

  .loader {
    border: 4px solid var(--color-red);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-right-color: transparent;
    animation: rot 1s linear infinite;
    box-shadow: 0px 0px 20px var(--color-red) inset;
  }

  @keyframes rot {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
