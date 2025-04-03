<template>
	<v-container
		fluid
		class="d-flex flex-column align-center justify-center pb-14 fill-height">
		<v-col
			cols="12"
			sm="8"
			md="8"
			lg="6"
			class="d-flex align-center justify-center flex-column">
			<ProfileCard />
			<v-btn
				@click="logout"
				variant="tonal"
				dark
				rounded="xl"
				color="error"
				class="mt-4"
				block>
				<v-icon class="mr-3"> mdi-logout </v-icon>
				LOGOUT
			</v-btn>
		</v-col>
	</v-container>
</template>

<script lang="ts" setup>
	const authStore = useAuthStore();

	onBeforeRouteLeave((to, from, next) => {
		const user = authStore.user;
		if (!user) {
			next();
			return;
		}

		if (!validUserProfile(user)) return;
		next();
	});

	const logout = async () => {
		await authStore.setUser(null);
		navigateTo("/login");
	};
</script>

<style></style>
