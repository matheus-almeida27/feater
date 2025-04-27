import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
	state: () => ({ showSnackbar: true, snackbarMessage: "" }),
	actions: {
		alertSnackbar(message: string) {
			this.snackbarMessage = message;
			this.showSnackbar = true;
		},
	},
});
