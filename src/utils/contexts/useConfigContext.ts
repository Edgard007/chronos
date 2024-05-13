import { useContext } from "react";

//* ==> Context <== *//
import { ConfigContext } from "../providers/ConfigProvider";

const useConfigContext = () => {
  const config = useContext(ConfigContext);
  return config;
};

export default useConfigContext;
