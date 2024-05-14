// Interface
import { ISessionReducer } from "@interfaces/session.interface";

// Action Types
import { SessionAction } from "@utils/types/session.type";

// Initial State
const initialState: ISessionReducer = {
  session: {
    isLogeedIn: false,
    logoutTime: "",
    token: "",
    signInTime: "",
  },
  user: {
    avatar: "",
    email: "",
    id: "",
    username: "",
  },
};

// Storage key
const STORAGE_KEY = "SESSION";

// Reducer
const sessionReducer = (state = initialState, action: SessionAction) => {
  let body: ISessionReducer;
  switch (action.type) {
    case "LOGIN":
      body = {
        ...state,
        user: action.payload.user,
        session: {
          ...action.payload.session,
          isLogeedIn: true,
        },
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(body));
      return body;
    case "UPDATE":
      body = {
        ...state,
        user: action.payload.user,
        session: action.payload.session,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(body));
      return body;
    case "RESTORE":
      body = {
        ...state,
        user: action.payload.user,
        session: action.payload.session,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(body));
      return body;
    case "RESET":
      body = {
        ...initialState,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(body));
      return body;
    case "LOGOUT":
      body = {
        ...initialState,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(body));
      return body;
    default:
      return state;
  }
};

export { STORAGE_KEY, initialState };
export default sessionReducer;
