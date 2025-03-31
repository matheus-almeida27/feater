// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
	// Essa verificação só pode ser feita no cliente, pois usamos localStorage
	if (import.meta.client) {
		const user = localStorage.getItem("auth") || null; 
		console.log("🚀 ~ user:", user);
		console.log("🚀 ~ to.path:", to.path);
		// Se o usuário não estiver logado e a rota não for a de login, redireciona para /login
		if (!user && to.path !== "/login") {
			return navigateTo("/login");
		}

		// Se o usuário estiver logado e tentar acessar a rota de login, redireciona para /home
		if (user && (to.path === "/login" || to.path === "/")) {
			const userStore = useAuthStore();
			if (!userStore.user) {
				userStore.setUser(Number({ id: Number(user) }));
			}
			return navigateTo("/home");
		}
	}
});
