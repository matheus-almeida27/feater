<template>
	<v-container
		fluid
		class="d-flex flex-column align-center pt-4 justify-center pb-14 fill-height">
		<h1 class="matches-title">Seus Feats</h1>

		<div
			v-if="filteredMatches.length === 0"
			class="no-matches">
			Nenhum feat encontrado ainda :(
		</div>

		<v-list
			class="matches-list pa-4"
			v-else>
			<v-list-item
				v-for="match in filteredMatches"
				:key="match.id"
				@click="goToChat(match)"
				class="match-item py-2 mb-4"
				rounded="xl"
				elevation="5">
				<template #prepend>
					<v-avatar
						size="56"
						class="match-avatar">
						<v-img
							contain
							:src="getMatchPhoto(match)"
							:alt="getMatchName(match)" />
					</v-avatar>
				</template>

				<template #title>
					<div>
						<span class="match-name">{{ getMatchName(match) }}</span>
					</div>
					<div v-if="getLastMessage(match) !== ''">
						<span class="match-last-msg">{{ getLastMessage(match) }}</span>
					</div>
				</template>

				<template #append>
					<v-icon icon="mdi-chevron-right" />
				</template>
			</v-list-item>
		</v-list>
	</v-container>
</template>

<script lang="ts" setup>
	import type { Chat, User } from "~/types/types.global";

	// Acesso às stores
	const authStore = useAuthStore();
	const staticStore = useStaticStore(); // Supondo que os dados dos usuários estão aqui
	const chatsStore = useChatsStore(); // Supondo que os dados dos usuários estão aqui
	const router = useRouter();

	// Exemplo de array de matches (pode vir de uma store ou API)
	const matches = ref(chatsStore.chats); // Supondo que os dados dos chats estão aqui

	// Usuários disponíveis (exemplo, pode vir de staticStore.users)

	// Filtra matches que incluem o usuário logado
	const filteredMatches = computed(() => {
		const userId = authStore.user?.id;
		return matches.value.filter((match) => match.participants.includes(userId || 0));
	});

	// Obtém o usuário correspondente ao match (o outro participante)
	function getMatchUser(match: Chat): User | undefined {
		const userId = authStore.user?.id;
		const otherUserId = match.participants.find((id) => id !== userId);
		return staticStore.users.find((user) => user.id === otherUserId);
	}

	// Obtém a foto do outro usuário no match
	function getMatchPhoto(match: Chat): string {
		const matchUser = getMatchUser(match);
		return matchUser?.profileImage || ""; // Foto padrão se não houver
	}

	// Obtém o nome do outro usuário no match
	function getMatchName(match: Chat): string {
		const matchUser = getMatchUser(match);
		return matchUser?.name || "Usuário";
	}
	const getLastMessage = (match: Chat): string => {
		let lastMessage = match.messages[match.messages.length - 1];
		let msg = lastMessage
			? lastMessage.sender === authStore.user?.id
				? `Você: ${lastMessage.text}`
				: lastMessage.text
			: "";
		msg = msg.length > 30 ? `${msg.substring(0, 30)}...` : msg;
		return msg;
	};

	// Navega para o chat com o match
	function goToChat(match: Chat) {
		router.push(`/messages/${match.id}`); // Ajuste a rota conforme sua estrutura
	}
</script>

<style scoped>
	.matches-title {
		font-size: 24px;
		font-weight: 300;
		margin-bottom: 20px;
		text-align: center;
	}

	.no-matches {
		text-align: center;
		color: #888;
		font-size: 18px;
	}

	.matches-list {
		background-color: transparent;
		width: 100%;
		max-width: 500px;
	}

	.match-name {
		font-size: 18px;
		font-weight: 200;
	}
	.match-last-msg {
		font-size: 16px;
		font-weight: 400;
		font-style: italic;
		color: #888;
	}
</style>
