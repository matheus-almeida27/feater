<template>
	<v-app>
		<v-app-bar
			class="px-3"
			:style="{
				background: 'transparent',
				backdropFilter: 'blur(15px)',
			}">
			<div class="d-flex align-center justify-center">
				<v-img
					height="35"
					width="40"
					contain
					src="../public/feater.png" />
				<span class="text-h6 font-weight-light ml-3">{{ routeName }}</span>
			</div>
			<v-spacer></v-spacer>
		</v-app-bar>
		<v-main>
			<slot />
			<Snackbar
				v-model="staticStore.showSnackbar"
				:text="staticStore.snackbarMessage" />
		</v-main>
		<v-bottom-navigation
			fixed
			mandatory
			@update:model-value="onClick"
			v-model="navigationValue"
			color="purple"
			:style="{
				background: 'transparent',
				backdropFilter: 'blur(15px)',
			}"
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
	const staticStore = useStaticStore();
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
		if (router.currentRoute.value.path == "/profile" && !validUserProfile(authStore.user)) {
			staticStore.alertSnackbar("Você precisa completar seu perfil antes de continuar.");
			nextTick(() => {
				navigationValue.value = 2;
			});
			return;
		}
		const pathMapping = ["/messages", "/home", "/profile"];
		if (pathMapping[value]) navigateTo(pathMapping[value]);
	};

	const routeName = computed(() => {
		const currentRoute = router.currentRoute.value.name;
		if (currentRoute === "messages") return "Feats";
		if (currentRoute === "home") return "Feater";
		if (currentRoute === "profile") return "Perfil";
		return "";
	});
</script>

<style scoped lang="scss">
	.leaf {
		&.off {
			filter: grayscale(80%);
		}
	}
</style>
