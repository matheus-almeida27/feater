<template>
	<v-container
		fluid
		class="d-flex flex-column align-center pt-2 justify-center pb-14 fill-height">
		<v-col
			cols="12"
			sm="8"
			md="8"
			lg="5"
			xl="4"
			class="d-flex align-center pt-0 justify-center flex-column">
			<div class="w-100 font-weight-thin mb-2 text-purple">
				<v-icon
					size="15"
					class="mr-1 opacity-30"
					>mdi-leaf</v-icon
				>
				<span class="opacity-60"> v 0.2.2-alpha </span>
			</div>
			<ProfileCard />
			<v-btn
				@click="logout"
				variant="tonal"
				dark
				max-height="40"
				rounded="xl"
				color="red-darken-2"
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

<style lang="scss" scoped></style>
