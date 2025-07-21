import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	root: 'client',
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './client/src'),
		},
	},
	build: {
		outDir: '../dist',
		emptyOutDir: true,
	},
	publicDir: 'public',
	server: {
		proxy: {
			'/api': 'http://localhost:5002'
		},
	},
});
