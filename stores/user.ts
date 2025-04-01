import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null,
	}),
	actions: {
		setUser(user: any) {
			this.user = user || null;
			localStorage.setItem("auth", JSON.stringify(this.user || ""));
		},
	},
	persist: true,
});
