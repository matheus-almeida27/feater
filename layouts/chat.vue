<template>
	<v-app>
		<slot />
		<Snackbar
				v-model="staticStore.showSnackbar"
				:text="staticStore.snackbarMessage" />
	</v-app>
</template>

<script lang="ts" setup>
	const staticStore = useStaticStore();
</script>

<style scoped lang="scss">
	v-main {
		height: 100vh;
	}
</style>
