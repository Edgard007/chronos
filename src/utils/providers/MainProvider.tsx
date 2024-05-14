// ==> Contexts
import { MsalProvider } from "@azure/msal-react";
import { ConfigProvider } from "@providers/ConfigProvider";
import { SessionProvider } from "@providers/SessionProvider";

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
      <SessionProvider>
        {/* Add others providers */}
        {children}
      </SessionProvider>
    </ConfigProvider>
  </MsalProvider>
);
