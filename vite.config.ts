import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // The vendored MUI template reads `process.env.TEMPLATE_IMAGE_URL` to relocate its
    // demo screenshots. `process` does not exist in the browser, so without this the
    // template throws at module evaluation. Replacing it statically keeps the template
    // files unmodified; it resolves to the template's own `https://mui.com` fallback.
    // Remove this once the template's placeholder imagery is replaced with real assets.
    'process.env.TEMPLATE_IMAGE_URL': JSON.stringify(''),
  },
  server: {
    // Bind to all interfaces so the dev server is reachable from outside the devcontainer.
    host: true,
    port: 5173,
  },
});
