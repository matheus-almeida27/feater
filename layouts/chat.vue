<template>
	<v-app>
		<v-main>
			<slot />
		</v-main>
	</v-app>
</template>

<script lang="ts" setup>
	import type { Chat, User } from "~/types/types.global";

	const staticStore = useStaticStore();
	const authStore = useAuthStore();
	const chatsStore = useChatsStore();

	const route = useRoute();
	const router = useRouter();

	const chatId = Number(route.params.chatId);

	const chat = chatsStore.chats.find((c: Chat) => c.id === chatId);
	console.log("🚀 ~ chat:", chat)

	const matchUser = computed(() => {
		const currentUserId = authStore.user?.id;
		console.log("🚀 ~ matchUser ~ currentUserId:", currentUserId)
		const otherUserId = chat?.participants.find((id: number) => id !== currentUserId);
		console.log("🚀 ~ matchUser ~ otherUserId:", otherUserId)
		return staticStore.users.find((user: User) => user.id === otherUserId);
	});

	function goBack() {
		router.back();
	}
</script>

<style scoped lang="scss"></style>
