<template>
	<div>
		{{ chat }}
	</div>
</template>
<script setup lang="ts">
const route = useRoute();
const chatId = route.params.chatId;

const authStore = useAuthStore();
const staticStore = useStaticStore();
const chatsStore = useChatsStore();
const chat = chatsStore.chats.find((chat) => chat.id === Number(chatId));

console.log(" chatId:", chatId);

</script>

<style scoped></style>
