export default defineNuxtPlugin((nuxtApp) => {
	const authStore = useAuthStore();
	const staticStore = useStaticStore();
	const chatsStore = useChatsStore();
	authStore.$persist;
	staticStore.$persist;
	chatsStore.$persist;
	if (!staticStore.users) {
		// PRIMEIRO ACESSO AO APP
		// CRIAR:
		//  USUÁRIOS FICTICIOS
		//  ARRAY DE GENEROS
	} else {
		// APP JÁ FOI ACESSADO
		if (!authStore.user?.id) {
			// usuario não logado
		} else {
			// usuario logado
		}
	}
});
