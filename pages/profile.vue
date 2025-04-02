<template>
	<v-container
		fluid
		class="d-flex flex-column align-center justify-center pb-14">
		<v-row no-gutters class="pb-4">
			<v-col
				cols="12"
				sm="8"
				md="8"
				lg="6"
				class="d-flex align-center justify-center mb-4">
				<ProfileCard />
			</v-col>
			<v-btn
				@click="logout"
				variant="tonal"
				dark
				rounded="xl"
				color="error"
				block>
				<v-icon class="mr-3"> mdi-logout </v-icon>
				LOGOUT
			</v-btn>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
const authStore = useAuthStore();

// onBeforeRouteLeave((to, from, next) => {
// 	const user = authStore.user;
// 	const validUserInfo = () => {
// 		if (
// 			user?.name &&
// 			user.bio &&
// 			user.favoriteGenres.length > 0 &&
// 			user.location.latitude &&
// 			user.location.longitude
// 		) {
// 			return true;
// 		}
// 		return false;
// 	};
// 	if (!validUserInfo()) return;
// 	next();
// });

const logout = async () => {
	await authStore.setUser(null);
	navigateTo("/login");
};
</script>

<style></style>
