<template>
	<div class="container bg-surface d-flex flex-column justify-center align-center">
		<div class="content pa-3">
			<h3 class="text-center">
				Esse erro (code: {{ error?.statusCode }}) não é culpa do desenvolvedor.
			</h3>
			<v-btn
				@click="onTryAgain"
				variant="tonal"
				dark
				max-height="60"
				rounded="xl"
				color="purple-lighten-2"
				class="mt-4"
				block>
				TENTAR NOVAMENTE
			</v-btn>
			<v-btn
				@click="handleError"
				variant="tonal"
				dark
				max-height="40"
				rounded="xl"
				color="red-darken-1"
				class="mt-4"
				block>
				RESETAR DADOS DO APP
			</v-btn>
		</div>
	</div>
</template>
<script setup lang="ts">
	definePageMeta({
		layout: "blank",
	});
	import type { NuxtError } from "#app";

	defineProps({
		error: Object as () => NuxtError,
	});

	const handleError = () => {
		localStorage.clear();

		// Remove todos os cookies
		document.cookie.split(";").forEach(function (cookie) {
			document.cookie = cookie
				.replace(/^ +/, "")
				.replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
		});

		return clearError({ redirect: "/login" });
	};
	const onTryAgain = () => {
		return navigateTo("/");
	};
</script>
<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.contend {
		width: 60vw;
	}
</style>
