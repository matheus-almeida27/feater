export default defineNuxtRouteMiddleware((to, from) => {
	if (import.meta.client) {
		const user = localStorage.getItem("auth") || null;
		if (!user && to.path !== "/login") {
			return navigateTo("/login");
		}

		if (user && (to.path.includes("login") || to.path === "/")) {
			const authStore = useAuthStore();
			if (!authStore.user) {
				authStore.setUser(Number({ id: Number(user) }));
			}
			return navigateTo("/home");
		}
	}
});
