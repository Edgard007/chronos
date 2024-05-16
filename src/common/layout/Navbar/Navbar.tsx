import { useTranslation } from "react-i18next";
import { useMsal } from "@azure/msal-react";
import { butterup } from "butterup-toast";
import styled from "styled-components";

// ==> Context
import useConfigContext from "@utils/contexts/useConfigContext";
import useSessionContext from "@contexts/useSessionContext";

// ==> Components
import SwitchMode from "../components/SwitchMode";
import MenuLng from "../components/MenuLng";

// ==> Assets
import { PowerIcon } from "@common/assets/CustomIcons";

const Logger = () => {
  const { instance } = useMsal();
  const { t } = useTranslation();

  // ==> Use context
  const { state, setLng, setMode } = useConfigContext();
  const { dispatch } = useSessionContext();

  const handleLogout = async () => {
    await instance
      .logoutPopup()
      .then(() => {
        dispatch({ type: "LOGOUT" });

        butterup.toast({
          title: t("logout.title") ?? "",
          message: t("logout.success") ?? "",
          type: "success",
          location: "bottom-right",
        });
      })
      .catch((err) => {
        console.error("Failed Logout", err);

        butterup.toast({
          title: t("logout.title") ?? "",
          message: t("logout.error") ?? "",
          type: "error",
          location: "bottom-right",
        });
      });
  };

  return (
    <Wrapper>
      <header>
        <section className="header_left">
          <span className="nameApp">{t("app_name")}</span>
        </section>
        <section className="header__opts">
          <MenuLng lng={state?.lng} setLng={(lng) => setLng(lng)} />
          <SwitchMode mode={state?.mode} changeMode={(mode) => setMode(mode)} />
          <PowerIcon onClick={() => handleLogout()} />
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
        color: var(--color-secundary);

        background: linear-gradient(
          90deg,
          var(--color-red),
          var(--color-secundary)
        );
        background-size: 200% auto;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: textclip 2s linear infinite;
      }
    }

    .header__opts {
      --w: 100px;

      width: auto;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 0.5rem;

      background-color: transparent;
    }

    svg {
      height: 1.5rem;
      width: auto;

      :hover {
        cursor: pointer;
      }
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export default Logger;
