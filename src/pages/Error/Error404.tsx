import styled from "styled-components";

const Error404 = () => (
  <Wrapper>
    <div title="404">404</div>
    <span> Page not found</span>
  </Wrapper>
);

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--color-tertiary);

  span {
    font-size: var(--font-md);
    color: rgba(var(--color-secundary-rgb),0.6);
    margin-top: 20px;
  }

  div {
    animation: glitch 1s linear infinite;

    font-size: var(--font-bg);
    letter-spacing: -7px;

    &:before,
    &:after {
      content: attr(title);
      position: absolute;
      left: 0;
    }

    &:before {
      animation: glitchTop 1s linear infinite;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    &:after {
      animation: glitchBotom 1.5s linear infinite;
      clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
      -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    }
  }

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }

    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }

    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }

    4%,
    60% {
      transform: translate(-2px, 2px);
    }

    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }

    4%,
    60% {
      transform: translate(-2px, 0);
    }

    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }
`;

export default Error404;
