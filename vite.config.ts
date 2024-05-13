import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@assets": "/src/common/assets",
      "@common": "/src/common",
      "@components": "/src/components",
      "@config": "/src/config",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@actions": "/src/utils/actions",
      "@contexts": "/src/utils/contexts",
      "@interfaces": "/src/utils/interfaces",
      "@providers": "/src/utils/providers",
      "@reducers": "/src/utils/reducers",
      "@types": "/src/utils/types",
    },
  },
});
