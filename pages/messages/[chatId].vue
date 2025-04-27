<template>
	<!-- Área de mensagens -->
	<v-app-bar
		dark
		app
		flat
		:style="{
			background: 'transparent',
			backdropFilter: 'blur(15px)',
		}">
		<v-btn
			icon
			size="large"
			@click="goBack">
			<v-icon>mdi-arrow-left</v-icon>
		</v-btn>
		<div
			@click="openMatchedProfile"
			v-ripple="true"
			class="d-flex w-100 h-100 align-center cursor-pointer rounde-pill">
			<v-avatar
				size="40"
				class="ml-0 mr-3">
				<v-img
					contain
					:src="matchedUser?.profileImage || ''"
					:alt="matchedUser?.name" />
			</v-avatar>
			<v-toolbar-title class="font-weight-light">{{
				matchedUser?.name || "Chat"
			}}</v-toolbar-title>
		</div>
	</v-app-bar>

	<v-dialog
		v-model="profileDialog"
		transition="dialog-bottom-transition"
		:content-class="'bg-surface fill-height justify-center align-center'"
		class="justify-center align-center"
		fullscreen>
		<v-container
			fluid
			class="d-flex align-center flex-column pa-0 fill-height overflow-y-scroll"
			:class="{
				'justify-center': smAndUp,
			}">
			<v-col
				cols="12"
				sm="8"
				md="8"
				lg="5"
				xl="4"
				class="d-flex align-center px-1 pt-0 justify-center flex-column">
				<profile-card
					:matchedUser
					@close="profileDialog = false" />
			</v-col>
		</v-container>
	</v-dialog>
	<v-container
		fluid
		class="d-flex align-center flex-column pa-0 message-container">
		<v-col
			cols="12"
			lg="6"
			md="8"
			sm="10"
			class="d-flex justify-center">
			<v-list
				class="pa-0 bg-transparent w-100"
				two-line>
				<div
					v-for="message in chat?.messages || []"
					:key="message.id"
					:id="`${message.id}`"
					:class="{
						sent: message.sender === authStore.user?.id,
						received: message.sender !== authStore.user?.id,
					}"
					class="message-item">
					<div
						v-if="message.text"
						class="message-text"
						@click="showMessageTime = !showMessageTime">
						{{ message.text }}
						<v-expand-transition>
							<div
								class="message-time"
								v-if="showMessageTime">
								{{ formatTimestamp(message.timestamp) }}
							</div>
						</v-expand-transition>
					</div>
				</div>
				<!-- Indicador de "digitando" -->
				<v-expand-transition>
					<div
						v-if="isTyping"
						class="typing-indicator received">
						<div class="dots">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</v-expand-transition>
			</v-list>
		</v-col>
	</v-container>

	<!-- Campo de texto fixado -->
	<v-bottom-navigation
		app
		class="glass-effect"
		height="auto">
		<div class="input-wrapper">
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
				@click:append-inner="sendMessage"></v-text-field>
		</div>
	</v-bottom-navigation>
</template>

<script setup lang="ts">
	import { useDisplay } from "vuetify";
	import { useRoute, useRouter } from "vue-router";
	import type { Chat, User, Message } from "~/types/types.global";

	definePageMeta({
		layout: "chat",
	});

	const { smAndUp } = useDisplay();

	// Acessa as stores
	const authStore = useAuthStore();
	const staticStore = useStaticStore();
	const chatsStore = useChatsStore();
	const profileDialog = ref(false);
	const showMessageTime = ref(false);
	const matchedUserId = ref();
	const route = useRoute();
	const router = useRouter();
	const chatId = Number(route.params.chatId);

	const isTyping = ref(false);

	const chat = chatsStore.chats.find((c: Chat) => c.id === chatId);

	if (!chat) {
		router.push("/matches");
	}

	const matchedUser = computed(() => {
		const currentUserId = authStore.user?.id;
		const otherUserId = chat?.participants.find((id: number) => id !== currentUserId);
		return staticStore.users.find((user: User) => user.id === otherUserId);
	});

	const newMessage = ref("");
	let messageContainer: any;

	function formatTimestamp(timestamp: string): string {
		const date = new Date(timestamp);
		const options: Intl.DateTimeFormatOptions = {
			day: "2-digit",
			month: "long",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		};
		return date.toLocaleString("pt-BR", options);
	}

	function sendMessage() {
		if (!newMessage.value.trim() || !chat) return;

		const message: Message = {
			id: Date.now(),
			chatId: chat.id,
			sender: authStore?.user?.id || 0,
			text: newMessage.value.trim(),
			timestamp: new Date().toISOString(),
		};

		chat.messages.push(message);
		newMessage.value = "";

		// Aguarda 1 segundo antes de começar a "digitar"
		setTimeout(() => {
			isTyping.value = true;

			// "Digita" por 3 segundos e depois envia a resposta
			setTimeout(() => {
				isTyping.value = false;
				setTimeout(() => {
					const randomResponses = [
						"Sim, concordo!",
						"Beleza, bora f1 então!",
						"Claro, bora!",
						"Com certeza meu mano",
						"vambora cpx!",
						"Vamos lá!",
					];
					const responseMessage: Message = {
						id: Date.now() + 1,
						chatId: chat.id,
						sender: matchedUser.value?.id || 0,
						text: randomResponses[Math.floor(Math.random() * randomResponses.length)],
						timestamp: new Date().toISOString(),
					};
					chat.messages.push(responseMessage);
				}, 1000); // Aguarda 100ms para garantir que o scroll ocorra após a mensagem ser adicionada
				scrollToBottom();
			}, 3000); // 3 segundos de "digitando"
		}, 1000); // 1 segundo de espera antes de começar

		scrollToBottom();
	}

	function scrollToBottom() {
		nextTick(() => {
			if (messageContainer) {
				messageContainer.scrollTo(0, messageContainer.scrollHeight);
			}
		});
	}

	function openMatchedProfile() {
		if (matchedUser.value) {
			// Passa o usuário correspondente para o componente de perfil
			matchedUserId.value = matchedUser.value.id;
			profileDialog.value = true;
		}
	}

	function goBack() {
		navigateTo("/messages");
	}

	// Scroll automático ao carregar mensagens
	onMounted(() => {
		nextTick(() => {
			messageContainer = document.getElementById("message_container");
			scrollToBottom();
		});
	});
</script>

<style scoped lang="scss">
	// hide scrollbar on all elemnts
	*::-webkit-scrollbar {
		display: none;
	}
	.message-container {
		overflow-y: auto;
		flex: 1;
		padding-top: 70px !important; /* Altura do bottom-navigation */
		padding-bottom: 45px !important; /* Altura do bottom-navigation */
	}

	.message-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 12px;
	}

	.sent {
		align-items: flex-end;
		text-align: right;
	}

	.received {
		align-items: flex-start;
		text-align: left;
	}

	.message-text {
		background: #0f002d;
		border-radius: 12px;
		padding: 8px 12px;
		word-wrap: break-word;
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
		font-style: italic;
	}

	.glass-effect {
		padding-top: 4px;
		backdrop-filter: blur(15px);
		background: transparent;
	}

	.input-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.container-input {
		margin-bottom: 8px;
		width: 100%;
		max-width: 40%; /* PCs: 40% da largura */
	}

	@media (max-width: 768px) {
		.container-input {
			max-width: 95%; /* Celulares: 100% da largura */
		}
		.message-text {
			max-width: 95%;
		}
	}
	.typing-indicator {
		// display: flex;
		align-items: center;
		width: fit-content;
	}

	.typing-indicator.received {
		justify-content: flex-start;
		background: #0f002d;
		border-radius: 12px;
		width: fit-content;
		padding: 8px 12px;
	}

	.typing-indicator .dots {
		// display: flex;
		align-items: center;
	}

	.typing-indicator .dots span {
		display: inline-block;
		width: 5px;
		height: 5px;
		margin-left: 6px;
		margin-top: 10px;

		background-color: #ffffff;
		border-radius: 50%;
		animation: bounce 1.4s infinite ease-in-out;
	}

	.typing-indicator .dots span:nth-child(1) {
		animation-delay: -0.32s;
	}

	.typing-indicator .dots span:nth-child(2) {
		animation-delay: -0.16s;
	}

	@keyframes bounce {
		0%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
	}
</style>
