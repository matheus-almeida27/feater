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
							size="small"
							>{{ text?.btn }}</v-btn
						>
					</v-row>
					<v-card-text>
						<v-form
							@submit.prevent="handleLogin"
							ref="form">
							<v-text-field
								variant="plain"
								v-model="username"
								label="Username"
								prepend-icon="mdi-account"
								:rules="[(v) => !!v || 'Username é obrigatório']"
								required
								class="mb-4"></v-text-field>

							<v-text-field
								variant="plain"
								v-model="password"
								label="Senha"
								prepend-icon="mdi-lock"
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								:type="showPassword ? 'text' : 'password'"
								:rules="[(v) => !!v || 'Senha é obrigatória']"
								@click:append="showPassword = !showPassword"
								required></v-text-field>

							<v-btn
								type="submit"
								color="purple"
								block
								large
								class="mt-6"
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
	definePageMeta({
		layout: "auth",
	});
	const userStore = useAuthStore();
	// Estados reativos
	const process = ref("signup");

	const username = ref("");
	const password = ref("");
	const showPassword = ref(false);
	const loading = ref(false);
	const form = ref(null);

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

			const users = JSON.parse(localStorage.getItem("users") || "[]");
			if (process.value === "signup") {
				// Verificar se o usuário já existe
				const existingUser = users.find((user: any) => user.username === username.value);
				if (existingUser) {
					alert("Usuário já existe. Escolha outro nome de usuário.");
					return;
				}

				// Gerar um código único de 4 dígitos
				let id: number | string;
				do {
					id = Math.floor(1000 + Math.random() * 9000).toString();
				} while (users.some((user: any) => user.id === id));

				// Criar novo usuário
				const newUser = {
					username: username.value,
					password: password.value,
					id: id,
				};
				users.push(newUser);
				localStorage.setItem("users", JSON.stringify(users));

				console.log("Novo usuário criado:", newUser);

				// Adicionar o usuário à store do Pinia

				userStore.setUser(newUser);

				// Redirecionar para /home
				await navigateTo("/home");
			} else if (process.value === "login") {
				// Verificar se o usuário existe e a senha está correta
				const user = users.find((user: any) => user.username === username.value);
				if (!user) {
					alert("Usuário não encontrado.");
					return;
				}
				if (user.password !== password.value) {
					alert("Senha incorreta.");
					return;
				}
				console.log("Login bem-sucedido:", user);

				// Adicionar o usuário à store do Pinia
				userStore.setUser(user);

				// Redirecionar para /home
				await navigateTo("/home");
			}
		} catch (error) {
			console.error("Erro:", error);
		} finally {
			loading.value = false;
		}
	};
</script>

<style scoped>
	.login-container {
		background: linear-gradient(135deg, #170829 0%, #2f0f49 100%);
		min-height: 100vh;
	}

	.v-card {
		background: linear-gradient(33deg, #170829 0%, #2f0f49 100%);
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
