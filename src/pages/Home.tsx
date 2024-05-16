import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Hook
import useSessionContext from "@contexts/useSessionContext";

// Components
import AddTask from "./AddTask";

// Assets
import { AddIcon } from "@assets/CustomIcons";

const Home = () => {
  const { state: stateSession } = useSessionContext();

  // Translations
  const { t } = useTranslation("", { keyPrefix: "home" });

  const [showAdd, setShowAdd] = useState(false);

  return (
    <Wrapper>
      <div className="h_header">
        <h2>{t("title", { name: stateSession?.user?.name ?? "" })}</h2>
        <AddIcon onClick={() => setShowAdd((prev) => !prev)} />
      </div>
      {showAdd && <AddTask />}
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

  .h_header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
  }
`;

export default Home;
