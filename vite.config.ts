import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import baristaCSS from "@modularmoon/barista";

export default defineConfig(({ mode }) => ({
	test: {},
	base: "/",
	plugins: [
		react(),
		baristaCSS({
			include: ["src/**/*.{js,ts,jsx,tsx,html}"],
			outputFilepath: "src/css/barista.css",
			delimiter1: "_",
			delimiter2: "--"
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	css: {
		devSourcemap: true
	},

	build: {
		outDir: "dist",
		terserOptions: {
			compress: {
				drop_debugger: true
			},
			format: {
				comments: false
			}
		}
	},
	server:
		mode === "development" ?
			{
				port: 5100,
				proxy: {
					"/server": {
						target: "http://localhost:8080",
						changeOrigin: true,
						secure: false
					}
				}
			}
		:	{}
}));
