// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	app: {
		head: {
			title: "Feater",
			link: [{ rel: "icon", type: "image/png", href: "/feater.png" }],
		},
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	build: {
		transpile: ["vuetify"],
	},
	devServer: {
		host: "192.168.100.110",
		port: 3000,
	},
	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@pinia/nuxt",
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
});
