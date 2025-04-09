<template>
	<v-container
		fluid
		class="fill-height d-flex flex-column pa-0 ">
		<!-- <v-app-bar
			dark
			app
			flat>
			<v-btn
				icon
				size="large"
				@click="goBack">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>
			<v-avatar
				size="40"
				class="ml-3 mr-2">
				<v-img
					contain
					:src="matchUser?.profileImage || ''"
					:alt="matchUser?.name" />
			</v-avatar>
			<v-toolbar-title class="font-weight-light">{{
				matchUser?.name || "Chat"
			}}</v-toolbar-title>
		</v-app-bar> -->
		<v-col
			cols="12"
			lg="6"
			md="8"
			class="d-flex justify-center">
			<!-- Área de mensagens -->
			<v-container
				fluid
				class="overflow-y-auto h-100 d-flex flex-column align-center pa-0">
				<v-list
					class="pa-0 bg-transparent w-100"
					two-line>
					<v-list-item
						v-for="message in chat?.messages || []"
						:key="message.id"
						:class="{
							sent: message.sender === authStore.user?.id,
							received: message.sender !== authStore.user?.id,
						}"
						class="message-item">
						<v-avatar
							v-if="message.sender !== authStore.user?.id"
							size="30"
							class="mr-1">
							<v-img
								contain
								:src="matchUser?.profileImage || ''"
								:alt="matchUser?.name" />
						</v-avatar>
						<v-list-item-title class="message-text">
							{{ message.text }}
						</v-list-item-title>
						<v-list-item-subtitle class="message-time">
							{{ formatTimestamp(message.timestamp) }}
						</v-list-item-subtitle>
					</v-list-item>
				</v-list>
				<v-text-field
					v-model="newMessage"
					placeholder="Digite sua mensagem..."
					variant="solo-filled"
					density="comfortable"
					rounded="xl"
					class="container-input"
					height="30"
					hide-details
					color="purple-darken-3"
					@keyup.enter="sendMessage"
					append-inner-icon="mdi-send"
					@click:append-inner="sendMessage">
				</v-text-field>
			</v-container>
		</v-col>
		<!-- Campo de entrada de mensagem -->
	</v-container>
</template>

<script setup lang="ts">
	import { ref, computed } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import type { Chat, User, Message } from "~/types/types.global";

	// Acessa as stores (ajuste os paths conforme seu projeto)
	const authStore = useAuthStore(); // authStore.user é o usuário logado
	const staticStore = useStaticStore(); // staticStore.users contém os dados dos usuários
	const chatsStore = useChatsStore(); // chatsStore.chats contém os chats

	const route = useRoute();
	const router = useRouter();
	const chatId = Number(route.params.chatId);

	// Procura o chat com base no chatId (lembre-se que o tipo Chat possui id como number)
	const chat = chatsStore.chats.find((c: Chat) => c.id === chatId);

	if (!chat) {
		// Se o chat não for encontrado, você pode redirecionar ou mostrar uma mensagem de erro
		router.push("/matches");
	}

	// Computa o matchUser: o outro usuário que participa do chat
	const matchUser = computed(() => {
		const currentUserId = authStore.user?.id;
		const otherUserId = chat?.participants.find((id: number) => id !== currentUserId);
		return staticStore.users.find((user: User) => user.id === otherUserId);
	});

	// Variável para nova mensagem
	const newMessage = ref("");

	// Função para formatar o timestamp
	function formatTimestamp(timestamp: string): string {
		const date = new Date(timestamp);
		return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	}

	// Função para enviar mensagem
	function sendMessage() {
		if (!newMessage.value.trim() || !chat) return;

		const message: Message = {
			id: Date.now(), // Pode usar uma estratégia de geração de ID melhor em produção
			chatId: chat.id,
			sender: authStore?.user?.id || 0,
			text: newMessage.value.trim(),
			timestamp: new Date().toISOString(),
		};

		// Adiciona a mensagem ao array do chat
		chat.messages.push(message);

		// Limpa o campo de entrada
		newMessage.value = "";

		// Opcional: implementar scroll automático para as mensagens recentes
	}

	// Função para voltar à tela anterior
	function goBack() {
		router.back();
	}
</script>

<style scoped lang="scss">
	.fill-height {
		height: calc(100vh - 80px) !important;
		margin-top: 80px !important;
	}

	.message-container {
		overflow-y: auto;
		max-height: calc(100vh - 128px); /* Ajusta conforme altura do app-bar e footer */
	}

	.message-item:deep(.v-list-item__content) {
		/* Estilo para o item da lista de mensagens */
		width: 100%;
	}
	.message-item {
		/* Espaçamento e alinhamento para diferenciar mensagens enviadas e recebidas */
		display: flex;
		margin-bottom: 12px;
	}

	.sent {
		justify-content: flex-end;
		text-align: right;
	}

	.received {
		justify-content: flex-start;
		text-align: left;
	}

	.message-text {
		/* Estilo para o formado do elemento da mensagem */
		background: #001837;
		border-radius: 20px;
		padding: 8px 14px;
		white-space: pre-wrap !important;
		overflow: visible !important;
		min-width: 40px;
		max-width: 70%;
		display: inline-block;
	}

	.sent .message-text {
		background: #27002d;
	}

	.message-time {
		font-size: 0.75rem;
		color: #8f8f8f;
		margin-top: 2px;
		padding-left: 48px;
	}

	.container-input {
		position: absolute;
		bottom: 80px;
		min-width: 400px;
		// padding: 16px;
		// z-index: 10; /* Para garantir que fique acima de outros elementos */
	}
</style>
