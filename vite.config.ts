import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import baristaCSS from "@modularmoon/barista";
import Inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	publicDir: "public",
	base: "/",
	plugins: [
		react(),
		Inspect(),
		visualizer(),
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
		target: "esnext",
		outDir: "dist",
		cssCodeSplit: false,
		sourcemap: true,
		minify: "terser",
		terserOptions: {
			compress: true,
			mangle: true,
			format: {
				comments: false
			}
		}
	}
});
