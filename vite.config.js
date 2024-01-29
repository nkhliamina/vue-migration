import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  __VUE_PROD_DEVTOOLS__ : process.env.NODE_ENV !== 'production',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
  },
})