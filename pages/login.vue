<template>
	<v-container
		fluid
		class="fill-height login-container">
		<v-row
			align="center"
			justify="center">
			<v-col
				cols="12"
				sm="8"
				md="6"
				lg="4">
				<v-card class="elevation-5 pa-4">
					<v-card-title class="text-h4 font-weight-thin text-center">
						{{ text?.header }}
					</v-card-title>
					<v-row
						no-gutters
						class="justify-center mb-4 opacity-60">
						<span class="d-flex justify-center align-center mr-1"> ou </span>
						<v-btn
							@click="process = process === 'login' ? 'signup' : 'login'"
							variant="text"
							rounded="xl"
							size="small"
							max-height="30"
							>{{ text?.btn }}
						</v-btn>
					</v-row>
					<v-card-text>
						<v-form
							@submit.prevent="handleLogin"
							ref="form">
							<v-text-field
								variant="plain"
								v-model="username"
								label="Username"
								hide-details
								:rules="[(v) => !!v || 'Username é obrigatório']"
								required
								class="mb-4"></v-text-field>

							<v-text-field
								variant="plain"
								v-model="password"
								label="Senha"
								hide-details
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								:type="showPassword ? 'text' : 'password'"
								:rules="[(v) => !!v || 'Senha é obrigatória']"
								@click:append="showPassword = !showPassword"
								required></v-text-field>

							<v-btn
								type="submit"
								color="purple-darken-4"
								block
								rounded="xl"
								large
								class="mt-10"
								:loading="loading">
								{{ process === "login" ? "Entrar" : "Criar Conta" }}
							</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
	import { populateUsersInfo } from "../utils/helpers";

	definePageMeta({
		layout: "auth",
	});
	const authStore = useAuthStore();
	const staticStore = useStaticStore();
	const alertStore = useAlertStore();
	// Estados reativos
	const process = ref("signup");

	const username = ref("");
	const password = ref("");
	const showPassword = ref(false);
	const loading = ref(false);
	const form = ref<{ isValid: boolean } | null>(null);

	const text = computed(() => {
		if (process.value === "login") {
			return { header: "Login", btn: "Criar Conta" };
		} else if (process.value === "signup") {
			return { header: "Criar Conta", btn: "Fazer Login" };
		}
	});
	// Função de login
	const handleLogin = async () => {
		try {
			loading.value = true;

			const users = staticStore.users;
			// Verificar se o formulário é válido
			if (!form.value?.isValid) {
				return;
			}
			if (process.value === "signup") {
				// Verificar se o usuário já existe
				const existingUser = users.find((user: any) => user.username === username.value);
				if (existingUser) {
					alertStore.alertSnackbar("Nome de usuário já existe");
					return;
				}

				// Gerar um código único de 4 dígitos
				let id: number | string;
				do {
					id = Math.floor(1000 + Math.random() * 9000).toString();
				} while (users.some((user: any) => user.id == id));

				// Criar novo usuário
				const newUser = {
					username: username.value,
					password: password.value,
					id: Number(id),
					likedUsers: [],
				};

				// Adicionar o usuário à store do Pinia
				authStore.setUser(newUser);
				staticStore.addUser(newUser);

				await navigateTo("/profile");
			} else if (process.value === "login") {
				// Verificar se o usuário existe e a senha está correta
				const user = users.find((user: any) => user.username == username.value);
				if (!user) {
					alertStore.alertSnackbar("Usuário não encontrado");
					return;
				}
				if (user.password !== password.value) {
					alertStore.alertSnackbar("Senha incorreta");
					return;
				}

				// Adicionar o usuário à store do Pinia
				authStore.setUser(user);
				if (!validUserProfile(user)) {
					await navigateTo("/profile");
					return;
				}
				// Redirecionar para /home
				await navigateTo("/home");
			}
		} catch (error) {
			console.error("login err:", error);
		} finally {
			populateUsersInfo();
			loading.value = false;
		}
	};
</script>

<style scoped>
	.login-container {
		background: linear-gradient(135deg, #1f0b2f 0%, #0d000c 100%);
		min-height: 100vh;
	}

	.v-card {
		background: linear-gradient(-20deg, #0d000c 0%, #1f0b2f 100%);
		border-radius: 12px;
	}

	@media (max-width: 600px) {
		.v-card {
			margin: 16px;
		}

		.v-btn {
			height: 48px !important;
		}
	}
</style>
