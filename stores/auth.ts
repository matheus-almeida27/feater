import { defineStore } from "pinia";
import type { User } from "~/types/types.global";
export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null as User | null,
	}),
	actions: {
		setUser(user: any) {
			console.log(" setUser | user:", user);
			this.user = user || null;
		},
	},
	persist: true,
});
