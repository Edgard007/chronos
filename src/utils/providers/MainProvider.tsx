// ==> Contexts
import { MsalProvider } from "@azure/msal-react";
import { ConfigProvider } from "@utils/providers/ConfigProvider";

// Azure confguration
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@src/authConfig.ts";

const msalInstance = new PublicClientApplication(msalConfig);

interface MainProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const MainProvider = ({ children }: MainProviderProps) => (
  <MsalProvider instance={msalInstance}>
    <ConfigProvider>
      {/* Add others providers */}
      {children}
    </ConfigProvider>
  </MsalProvider>
);
