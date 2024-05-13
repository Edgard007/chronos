import { createContext, useReducer, useEffect } from "react";

import i18n from "@config/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";

// ==> Style config
import { lightTheme, darkTheme } from "@common/styles/themes";
import { GlobalStyles } from "@common/styles/GlobalStyles";

// ==> Types
import { ConfigAction, LngSite, ModeSite } from "@src/utils/types/config.type";

// ==> Interfaces
import { IConfigReducer } from "@src/utils/interfaces/config.interface";

// ==> Reducers
import sessionReducer, {
  initialState as initStateReducer,
} from "@src/utils/reducers/config.reducer";

interface ConfigProviderProps {
  children: JSX.Element | JSX.Element[];
}

export type ConfigContextType = {
  state: IConfigReducer;
  dispatch: React.Dispatch<ConfigAction>;
  setLng: (lng: LngSite) => void;
  setMode: (mode: ModeSite) => void;
};

export const ConfigContext = createContext<ConfigContextType>(
  {} as ConfigContextType
);

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  // ==>
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  // ==> STATE
  const [state, dispatch] = useReducer(sessionReducer, initStateReducer);

  useEffect(() => {
    restoreState();
  }, []);

  window.addEventListener("storage", (ev) => {
    if (ev.key === "CONFIG") {
      restoreState();
    }
  });

  const getDeviceConfig = () => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const lng = window.navigator.language.split("-")[0];

    const body: IConfigReducer = {
      mode: isDarkMode ? "dark" : "light",
      lng: lng === "es" ? "es" : "en",
    };
    dispatch({
      type: "DEFAULT",
      payload: body,
    });

    changeLanguage(body?.lng);
    document.title = i18n.t("app_name");
  };

  const restoreState = () => {
    // ==> Restore info
    const config = localStorage.getItem("CONFIG");

    if (config) {
      // ==> Restore sesion
      const body: IConfigReducer = JSON.parse(config);
      dispatch({
        type: "RESTORE",
        payload: body,
      });

      changeLanguage(body?.lng);
      document.title = i18n.t("app_name");
    } else getDeviceConfig();
  };

  const changeMode = (mode: ModeSite) => {
    dispatch({
      type: "SET_MODE",
      payload: {
        mode: mode,
      },
    });
  };

  const changeLng = (lng: LngSite) => {
    dispatch({
      type: "SET_LNG",
      payload: {
        lng: lng,
      },
    });

    changeLanguage(lng);
    document.title = i18n.t("app_name");
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ConfigContext.Provider
        value={{
          state: state,
          setLng: (lng) => changeLng(lng),
          setMode: (mode) => changeMode(mode),
          dispatch: dispatch,
        }}
      >
        <ThemeProvider theme={state?.mode === "dark" ? darkTheme : lightTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ConfigContext.Provider>
    </I18nextProvider>
  );
};
