// ==> Types
import { ConfigAction } from "@src/utils/types/config.type";

// ==> Interfaces
import { IConfigReducer } from "@src/utils/interfaces/config.interface";

const initialState: IConfigReducer = {
  lng: "es",
  mode: "light",
};

const sessionReducer = (
  state: IConfigReducer = initialState,
  action: ConfigAction
): IConfigReducer => {
  let body: IConfigReducer;

  switch (action?.type) {
    case "SET_MODE":
      body = {
        ...state,
        mode: action?.payload?.mode,
      };

      localStorage.setItem("CONFIG", JSON.stringify(body));
      return body;

    case "SET_LNG":
      body = {
        ...state,
        lng: action?.payload?.lng,
      };

      localStorage.setItem("CONFIG", JSON.stringify(body));
      return body;

    case "RESTORE":
      body = {
        ...state,
        lng: action?.payload?.lng,
        mode: action?.payload?.mode,
      };

      localStorage.setItem("CONFIG", JSON.stringify(body));
      return body;

    case "RESET":
      body = {
        ...initialState,
      };

      localStorage.setItem("CONFIG", JSON.stringify(body));
      return body;

    case "DEFAULT":
      body = {
        ...state,
        lng: action?.payload?.lng,
        mode: action?.payload?.mode,
      };

      localStorage.setItem("CONFIG", JSON.stringify(body));
      return body;

    default:
      return state;
  }
};

export { initialState };
export default sessionReducer;
