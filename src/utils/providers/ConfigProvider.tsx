import { createContext, useReducer, useEffect } from "react";

import { I18nextProvider, useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";

// Config
import i18next from "@config/i18n";
import { DEFAULT_LNG } from "@config/lng";

// ==> Style config
import { lightTheme, darkTheme } from "@common/styles/themes";
import { GlobalStyles } from "@common/styles/GlobalStyles";

// ==> Types
import { ConfigAction, LngSite, ModeSite } from "@utils/types/config.type";

// ==> Interfaces
import { IConfigReducer } from "@interfaces/config.interface";

// ==> Reducers
import sessionReducer, {
  initialState as initStateReducer,
  STORAGE_KEY,
} from "@reducers/config.reducer";

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
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  // ==> STATE
  const [state, dispatch] = useReducer(sessionReducer, initStateReducer);

  useEffect(() => {
    restoreState();
  }, []);

  window.addEventListener("storage", (ev) => {
    if (ev.key === STORAGE_KEY) {
      restoreState();
    }
  });

  const getDeviceConfig = () => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const body: IConfigReducer = {
      mode: isDarkMode ? "dark" : "light",
      lng: DEFAULT_LNG,
    };
    dispatch({
      type: "DEFAULT",
      payload: body,
    });
    saveLng(body.lng);
  };

  const restoreState = () => {
    // ==> Restore info
    const config = localStorage.getItem(STORAGE_KEY);

    if (config) {
      // ==> Restore sesion
      const body: IConfigReducer = JSON.parse(config);
      dispatch({
        type: "RESTORE",
        payload: body,
      });
      saveLng(body.lng);
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
    saveLng(lng);
  };

  const saveLng = (lng: LngSite) => {
    if (state?.lng === lng) return;

    changeLanguage(lng);
    // Change title
    document.title = t("app_name");

    // Chage lang in html
    document.documentElement.lang = lng;

    // Change description
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t("app_description"));
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = t("app_description");
      document.head.appendChild(meta);
    }
  };

  return (
    <I18nextProvider i18n={i18next}>
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
