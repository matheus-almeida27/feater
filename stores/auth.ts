import { defineStore } from "pinia";
import type { User } from "~/types/types.global";
export const useAuthStore = defineStore("auth", {
	state: () => ({
		user: null as User | null,
	}),
	actions: {
		setUser(user: any) {
			this.user = user || null;
		},
		addLikedUser(userId: number) {
			if (!this.user?.likedUsers?.includes(Number(userId))) {
				this.user?.likedUsers?.push(Number(userId));
				const staticStore = useStaticStore();
				const user = staticStore.users.find((user) => Number(user.id) == Number(userId));
				if (user) {
					user.likedUsers.push(Number(userId));
				}
			}
		},
		rmvLikedUser(userId: number) {
			const index = this.user?.likedUsers?.indexOf(Number(userId));
			if (index !== undefined && index !== -1) {
				this.user?.likedUsers?.splice(index, 1);
				const staticStore = useStaticStore();
				const user = staticStore.users.find((user) => Number(user.id) == Number(userId));
				if (user) {
					const likedIndex = user.likedUsers.indexOf(Number(userId));
					if (likedIndex !== -1) {
						user.likedUsers.splice(likedIndex, 1);
					}
				}
			}
		},
	},
	persist: true,
});
