// ==> Contexts
import { ConfigProvider } from "@utils/providers/ConfigProvider";

interface MainProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const MainProvider = ({ children }: MainProviderProps) => (
  <ConfigProvider>
    {/* Add others providers */}
    {children}
  </ConfigProvider>
);
