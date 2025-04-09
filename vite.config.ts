import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import  { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({rollupTypes: true})],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@styles': resolve(__dirname, './src/styles'),
      '@public': resolve(__dirname, './public'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // opcional: convierte kebab-case a camelCase
      generateScopedName: '[name]__[local]__[hash:base64:5]' // opcional: formato del nombre de clase
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ui-mathilde-web',
      fileName: 'ui-mathilde-web',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
