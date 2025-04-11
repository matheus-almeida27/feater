<template>
	<!-- Área de mensagens -->
	<v-app-bar
		dark
		app
		flat>
		<v-btn
			icon
			size="large"
			@click="goBack">
			<v-icon>mdi-arrow-left</v-icon>
		</v-btn>
		<div
			@click="openMatchedProfile"
			:ripple="true"
			class="d-flex w-100 align-center cursor-pointer">
			<v-avatar
				size="40"
				class="ml-0 mr-3">
				<v-img
					contain
					:src="matchUser?.profileImage || ''"
					:alt="matchUser?.name" />
			</v-avatar>
			<v-toolbar-title class="font-weight-light">{{
				matchUser?.name || "Chat"
			}}</v-toolbar-title>
		</div>
	</v-app-bar>
	<!-- um dialog para exibir as informações do perfil do usuário que deu match -->
	<v-dialog
		v-model="profileDialog"
		max-width="600px"
		transition="dialog-transition">
		<profile-card />
	</v-dialog>

	<v-container
		fluid
		class="overflow-y-auto h-100 d-flex flex-column align-center pa-0 message-container"
		id="message_container">
		<v-col
			cols="12"
			lg="6"
			md="8"
			class="d-flex justify-center pb-0">
			<v-list
				class="pa-0 bg-transparent w-100"
				two-line>
				<div
					v-for="message in chat?.messages || []"
					:key="message.id"
					@click="showMessageTime = !showMessageTime"
					:class="{
						sent: message.sender === authStore.user?.id,
						received: message.sender !== authStore.user?.id,
					}"
					class="message-item">
					<div class="message-text">
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
	const showMessageTime = ref(false);
	const profileDialog = ref(false);
	const matchedUserId = ref();

	const route = useRoute();
	const router = useRouter();
	const chatId = Number(route.params.chatId);

	const chat = chatsStore.chats.find((c: Chat) => c.id === chatId);

	if (!chat) {
		router.push("/matches");
	}

	const matchUser = computed(() => {
		const currentUserId = authStore.user?.id;
		const otherUserId = chat?.participants.find((id: number) => id !== currentUserId);
		return staticStore.users.find((user: User) => user.id === otherUserId);
	});

	const newMessage = ref("");
	let messageContainer: any;

	function formatTimestamp(timestamp: string): string {
		//formatar o timestamp para exibir no formato DD MES AA HH:mm
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
		if (matchUser.value) {
			// Passa o usuário correspondente para o componente de perfil
			matchedUserId.value = matchUser.value.id;
			profileDialog.value = true;
		}
	}

	function goBack() {
		router.back();
	}

	// Scroll automático ao carregar mensagens
	onMounted(() => {
		nextTick(() => {
			messageContainer = document.getElementById("message_container");
			// scrollToBottom();
		});
	});
</script>

<style scoped lang="scss">
	.message-container {
		overflow-y: auto;
		max-height: calc(100vh - 128px); /* Ajusta conforme altura do app-bar e footer */
		flex: 1;
	}

	.message-item {
		display: flex !important;
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
		background: #001837;
		border-radius: 12px;
		padding: 4px 10px;
		// white-space: pre-wrap !important;
		// overflow: visible !important;
		word-wrap: break-word;
		min-width: 40px;
		max-width: 65%;
		display: inline-block;
	}

	.sent .message-text {
		background: #27002d;
	}

	.message-time {
		font-size: 0.75rem;
		color: #8f8f8f;
		margin-top: 1px;
		font-style: italic;
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
