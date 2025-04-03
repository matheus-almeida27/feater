<template>
	<v-app>
		<slot />
		<v-bottom-navigation
			fixed
			mandatory
			@update:model-value="onClick"
			v-model="navigationValue"
			color="purple"
			grow>
			<v-btn
				:ripple="false"
				:active="false">
				<v-icon size="30">mdi-chat</v-icon>
			</v-btn>

			<v-btn
				:ripple="false"
				rounded
				:active="false">
				<v-img
					width="30"
					contain
					:class="{ leaf: true, off: navigationValue != 1 }"
					src="../public/feater.png" />
			</v-btn>

			<v-btn
				:ripple="false"
				rounded
				:active="false">
				<v-icon size="30">mdi-account</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</v-app>
</template>

<script lang="ts" setup>
	const navigationValue = ref<number | null>(null);
	const router = useRouter();
	const authStore = useAuthStore();
	const routeMapping: Record<string, number> = {
		messages: 0,
		home: 1,
		profile: 2,
	};

	watch(
		() => router.currentRoute.value.name,
		(route) => {
			navigationValue.value = route ? routeMapping[route as string] ?? null : null;
		},
		{ immediate: true },
	);

	const onClick = (value: number | null) => {
		if (value === null) return;
		if (!validUserProfile(authStore.user)) {
			alert("Você precisa completar seu perfil antes de continuar.");
			nextTick(() => {
				navigationValue.value = 2;
			});
			return;
		}
		const pathMapping = ["/messages", "/home", "/profile"];
		if (pathMapping[value]) navigateTo(pathMapping[value]);
	};
</script>

<style scoped lang="scss">
	.leaf {
		&.off {
			filter: grayscale(80%);
		}
	}
</style>
