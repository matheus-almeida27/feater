export default defineNuxtRouteMiddleware((to, from) => {
	if (import.meta.client) {
		const authStore = useAuthStore();
		if (!authStore.user?.id && to.path !== "/login") {
			return navigateTo("/login");
		}

		if (authStore.user?.id && (to.path.includes("login") || to.path === "/")) {
			return navigateTo("/home");
		}
	}
});
