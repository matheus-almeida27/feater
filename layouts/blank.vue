<template>
	<v-app>
		<v-main>
			<slot />
			<Snackbar
				v-model="staticStore.showSnackbar"
				:text="staticStore.snackbarMessage" />
		</v-main>
	</v-app>
</template>
<script lang="ts" setup>
	const staticStore = useStaticStore();
</script>
