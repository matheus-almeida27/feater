<template>
	<!-- Área de mensagens -->
	<v-app-bar
		dark
		app
		flat
		:style="
			 {
				background: 'transparent',
				backdropFilter: 'blur(5px)'
			}
		">
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
		:content-class="'bg-surface d-flex justify-center align-center'"
		class="d-flex justify-center align-center"
		fullscreen>
		<v-col
			cols="12"
			sm="7"
			md="6"
			lg="4"
			xl="3"
			class="d-flex justify-center align-center ma-0 pa-0">
			<profile-card
				:matchedUser
				@close="profileDialog = false" />
		</v-col>
	</v-dialog>
	<v-container
		id="message_container"
		fluid
		class="overflow-y-auto d-flex align-center flex-column pa-0 message-container"
		ref="messageContainer">
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
					:class="{
						sent: message.sender === authStore.user?.id,
						received: message.sender !== authStore.user?.id,
					}"
					class="message-item">
					<div
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
	definePageMeta({
		layout: "chat",
	});
	import { ref, computed, onMounted, nextTick } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import type { Chat, User, Message } from "~/types/types.global";

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
		let randomResponses = [
			"Sim, concordo!",
			"Beleza, bora f1 então!",
			"Claro, bora!",
			"Com certeza meu mano",
			"vambora cpx!",
			"Vamos lá!",
		];
		setTimeout(() => {
			// simule o envio de uma mensagem de resposta do outro usuário
			const responseMessage: Message = {
				id: Date.now() + 1,
				chatId: chat.id,
				sender: matchedUser.value?.id || 0,
				// na mensagem abaixo envia algo aleatorio entre "sim, concordo, beleza bora f1 então" e outras 5 respostas aleatórias básicas
				text: randomResponses[Math.floor(Math.random() * randomResponses.length)],
				timestamp: new Date().toISOString(),
			};
			chat.messages.push(responseMessage);
			scrollToBottom();
		}, 1200);

		// Scroll para a última mensagem
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
		backdrop-filter: blur(10px);
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
</style>
