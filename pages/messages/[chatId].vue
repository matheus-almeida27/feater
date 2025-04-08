<template>
	<div>
		{{ chatId }}
	</div>
</template>
<script setup lang="ts">
const chatId = useRoute().params.value;
console.log(" chatId:", chatId);
</script>

<style scoped></style>
