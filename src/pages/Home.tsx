import styled from "styled-components";

// ==> Context

// ==> Components
import SwitchMode from "@common/layout/components/SwitchMode";

const Home = () => {

  return (
    <Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 300px));
  gap: 30px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 950px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  }
`;

export default Home;
