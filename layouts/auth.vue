<template>
	<v-app>
		<v-app-bar
			height="80"
			class="align-center d-flex elevation-0 bg-transparent justify-end">
			<v-img
				height="50"
				contain
				src="../public/feater.png" />
		</v-app-bar>
		<slot />
		<Snackbar
			v-model="staticStore.showSnackbar"
			:text="staticStore.snackbarMessage" />
	</v-app>
</template>

<script lang="ts" setup>
	const staticStore = useStaticStore();
</script>

<style scoped lang="scss"></style>
