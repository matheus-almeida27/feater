<template>
	<div>
		<h3>{{ error?.statusCode }}</h3>
		<v-btn
			@click="handleError"
			variant="outlined"
			dark
			max-height="40"
			rounded="xl"
			color="red-darken-1"
			class="mt-4"
			block>
			<v-icon class="mr-3"> mdi-alert </v-icon>
			RESETAR DADOS DO APP
		</v-btn>
	</div>
</template>
<script setup lang="ts">
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

		return clearError({ redirect: "/" });
	};
</script>
