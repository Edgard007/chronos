import { useTranslation } from "react-i18next";

import styled from "styled-components";

// ==> Context
import useConfigContext from "@utils/contexts/useConfigContext";

// ==> Components
import SwitchMode from "../components/SwitchMode";
import MenuLng from "../components/MenuLng";

const Logger = () => {
  const { t } = useTranslation();

  // ==> Use context
  const { state, setLng, setMode } = useConfigContext();

  return (
    <Wrapper>
      <header>
        <section className="header_left">
          <span className="nameApp">{t("app_name")}</span>
        </section>
        <section className="header__opts">
          <MenuLng lng={state?.lng} setLng={(lng) => setLng(lng)} />
          <SwitchMode mode={state?.mode} changeMode={(mode) => setMode(mode)} />
        </section>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: var(--hNav);
  top: 0;
  left: 0;

  z-index: var(--z-md);

  background-color: var(--color-primary);
  box-shadow: 0 0px 1px var(--color-secundary);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 1rem;

    .header_left {
      --w: auto;

      width: var(--w);
      height: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      gap: 1rem;

      background-color: transparent;

      .nameApp {
        font-size: var(--font-md);
        font-family: var(--primary-font);
        font-weight: var(--bold-weight);
        color: var(--color-blue);
      }
    }

    .header__opts {
      --w: 150px;

      width: auto;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 0.25rem;

      background-color: transparent;
    }

    svg {
      height: 2.25rem;
      width: auto;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default Logger;
