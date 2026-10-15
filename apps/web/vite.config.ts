import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { lazyPlugins } from "vite-plus"

// https://vite.dev/config/
export default defineConfig({
	plugins: lazyPlugins(() => [tanstackRouter({ target: "react", autoCodeSplitting: true }), react(), tailwindcss()]),
	server: {
		/* proxy: {
			"/api": {
				target: "http://localhost:3000",
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		}, */
	},
})
