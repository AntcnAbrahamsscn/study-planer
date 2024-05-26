import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  baseUrl: './',
  test: {
	environment: 'jsdom',
	globals: true,
	// setupFiles: './tests/setup.js'
  },
  server: {
    port: 7124,
    host: true
  },
})
