import styled from "styled-components";

// ==> Components
import Navbar from "./Navbar/Navbar";

interface LoggedLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const LoggedLayout = ({ children }: LoggedLayoutProps) => {
  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  --hTop: var(--hNav);

  main {
    width: 100%;
    margin-top: var(--hTop);
    min-height: calc(100vh - var(--hTop));

    padding: 30px;
    background-color: var(--color-tertiary);
  }
`;

export default LoggedLayout;
