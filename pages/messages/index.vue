<template>
	<v-container
		fluid
		class="d-flex flex-column align-center pt-2 justify-center pb-14 fill-height">
		<h1 class="matches-title">Seus Matches</h1>
		<div
			v-if="filteredMatches.length === 0"
			class="no-matches">
			Nenhum match encontrado ainda!
		</div>
		<v-list class="matches-list">
			<v-list-item
				v-for="match in filteredMatches"
				:key="match.id"
				class="match-item"
				@click="goToChat(match)">
				<v-avatar
					size="50"
					class="match-avatar">
					<img
						:src="getMatchPhoto(match)"
						:alt="getMatchName(match)" />
				</v-avatar>
				<v-list-item-content>
					<v-list-item-title class="match-name">
						{{ getMatchName(match) }}
					</v-list-item-title>
				</v-list-item-content>
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

// Navega para o chat com o match
function goToChat(match: Chat) {
	router.push(`/chat/${match.id}`); // Ajuste a rota conforme sua estrutura
}
</script>

<style scoped>
.matches-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	text-align: center;
}

.no-matches {
	text-align: center;
	color: #888;
	font-size: 18px;
}

.matches-list {
	background: none;
}

.match-item {
	display: flex;
	align-items: center;
	padding: 10px;
	border-bottom: 1px solid #eee;
	cursor: pointer;
	transition: background 0.2s;
}

.match-item:hover {
	background: #f5f5f5;
}

.match-avatar {
	margin-right: 15px;
}

.match-avatar img {
	border-radius: 50%;
}

.match-name {
	font-size: 18px;
	font-weight: 500;
}
</style>
