// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { register } from "swiper/element-bundle";

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: "dark",
		},
		icons: {
			defaultSet: "mdi",
		},
	});
	app.vueApp.use(vuetify);
	register();
});
