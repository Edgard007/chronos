import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Hook
import useSessionContext from "@contexts/useSessionContext";

const Home = () => {
  const { state: stateSession } = useSessionContext();

  // Translations
  const { t } = useTranslation();

  return (
    <Wrapper>
      Hola {stateSession?.user?.name || "Invitado"}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  gap: 1rem;
  padding: 1rem;
`;

export default Home;
