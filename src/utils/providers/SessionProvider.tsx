import { createContext, useReducer, useEffect } from "react";

// Reducer
import sessionReducer, {
  initialState as initStateReducer,
  STORAGE_KEY,
} from "@reducers/session.reducer";

// Interface
import { ISessionReducer } from "@interfaces/session.interface";

// Type
import { SessionAction } from "@utils/types/session.type";

interface SessionProviderProps {
  children: JSX.Element | JSX.Element[];
}

export type SessionContextType = {
  state: ISessionReducer;
  dispatch: React.Dispatch<SessionAction>;
};

export const SessionContext = createContext<SessionContextType>(
  {} as SessionContextType
);

export const SessionProvider = ({ children }: SessionProviderProps) => {
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

  const restoreState = () => {
    const session = localStorage.getItem(STORAGE_KEY);
    if (session) {
      dispatch({
        type: "RESTORE",
        payload: JSON.parse(session),
      });
    } else {
      dispatch({
        type: "RESET",
      });
    }
  };

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};
