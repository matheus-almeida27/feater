import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null,
	}),
	actions: {
		setUser(user: any) {
			console.log(" setUser | user:", user);
			this.user = user || "";
		},
	},
	persist: true,
});
