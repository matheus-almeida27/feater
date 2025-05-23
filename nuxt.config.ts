// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: "Feater",
			link: [{ rel: "icon", type: "image/png", href: "/public/feater.png" }],
		},
		baseURL: "/feater/", // baseURL: '/<repository>/'
		buildAssetsDir: "assets",
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	build: {
		transpile: ["vuetify"],
	},
	devServer: {
		host: process.env.HOST,
		port: Number(process.env.PORT),
	},
	piniaPluginPersistedstate: {
		storage: "localStorage",
	},
	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
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
