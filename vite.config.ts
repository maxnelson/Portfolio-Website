import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import baristaCSS from "@modularmoon/barista";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
	base: "/",
	plugins: [
		react(),
		Inspect(),
		baristaCSS({
			include: ["src/**/*.{js,ts,jsx,tsx,html}"],
			outputFilepath: "src/css/barista.css",
			delimiter1: "_",
			delimiter2: "--"
		})
	],
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "./src")
		}
	},
	css: {
		devSourcemap: true
	},
	build: {
		sourcemap: true,
		outDir: "dist",
		minify: "terser",
		terserOptions: {
			sourceMap: {
				filename: "out.js",
				url: "out.js.map"
			}
		}
	}
});
