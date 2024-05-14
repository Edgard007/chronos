import styled from "styled-components";

interface PublicLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const PublicLayout = ({ children }: PublicLayoutProps) => (
  <Wrapper>
    <main>{children}</main>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;

  main {
    width: 100%;
    height: 100vh;

    display: flex;
    background-color: var(--color-primary);
  }
`;

export default PublicLayout;
