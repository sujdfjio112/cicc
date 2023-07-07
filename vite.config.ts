import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
    base: './',
  plugins: [react()],
    // 配置路径别名
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "src"),
          },
        },
      server: {
          port: 3000,
          proxy: {
            "/api": {
              target: "https://yourBaseUrl",
              changeOrigin: true,
              cookieDomainRewrite: "",
              secure: false,
            },
          },
        },
  });
