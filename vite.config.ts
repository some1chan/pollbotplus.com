import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";
// import { ViteFaviconsPlugin } from "vite-plugin-favicon2";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		// ViteFaviconsPlugin({
		// 	logo: "./src/svg/PollBotPlus-min.svg",
		// }),
	],
});
