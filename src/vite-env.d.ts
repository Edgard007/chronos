/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AZURE_ID_APP: string;
  readonly VITE_AZURE_TENANT_ID: string;
  readonly VITE_AZURE_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
