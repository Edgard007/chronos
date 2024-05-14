import { useContext } from "react";

//* ==> Context <== *//
import { SessionContext } from "../providers/SessionProvider";

const useSessionContext = () => {
  const session = useContext(SessionContext);
  return session;
};

export default useSessionContext;
