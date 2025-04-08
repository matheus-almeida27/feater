import { defineStore } from "pinia";
import type { Chat, User } from "~/types/types.global";

export const useChatsStore = defineStore("chatsStore", {
	state: () => ({
		chats: [] as Chat[],
		selectedChat: null as Chat | null,
	}),
	actions: {
		createChat(matchedUser: User) {
			const authStore = useAuthStore();
			// Verifica se já existe um chat com o usuário correspondente
			const existingChat = this.chats.find(
				(chat) =>
					chat.participants.includes(Number(matchedUser.id)) &&
					chat.participants.includes(Number(authStore?.user?.id))
			);
			if (!existingChat) {
				// Cria um novo chat com o usuário correspondente
				const newChat: Chat = {
					id: Date.now(), // ID único para o chat
					participants: [matchedUser.id, authStore?.user?.id || 0], // IDs dos participantes
					messages: [], // Inicializa com mensagens vazias
				};
				this.chats.push(newChat);
			}
		},
		selectChat(chatId: number) {
			const chat = this.chats.find((c) => c.id == chatId);
			this.selectedChat = chat || null;
		},
	},
	persist: true,
});
