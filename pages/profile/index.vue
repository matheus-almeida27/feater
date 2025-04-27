<template>
	<v-container
		fluid
		class="d-flex flex-column align-center pt-2 justify-center pb-0 fill-height">
		<v-col
			cols="12"
			sm="8"
			md="8"
			lg="5"
			xl="4"
			class="d-flex align-center px-1 pt-0 justify-center flex-column">
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
			<v-btn
				@click="resetData"
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
			<div class="w-100 d-flex font-weight-thin justify-center align-center mt-4 text-white">
				<v-icon
					size="15"
					color="purple-darken-1"
					class="mr-1 opacity-80"
					>mdi-leaf</v-icon
				>
				<span class="opacity-60"> v 1.0 </span>
			</div>
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

	const resetData = () => {
		localStorage.clear();

		// Remove todos os cookies
		document.cookie.split(";").forEach(function (cookie) {
			document.cookie = cookie
				.replace(/^ +/, "")
				.replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
		});

		// Recarrega a página
		location.reload();
	};
</script>

<style lang="scss" scoped></style>
