<template>
	<div class="match-dialog">
		<v-container fill-height>
			<!-- Cabeçalho do match -->
			<v-btn
				variant="text"
				rounded="xl"
				class="position-absolute top-0 right-0 mr-3 mt-3"
				icon="mdi-close"
				@click="$emit('close')"></v-btn>
			<v-row
				align="center"
				justify="center">
				<v-col
					cols="12"
					class="text-center">
					<transition name="fade">
						<div class="match-header">
							<h2>É um feat!</h2>
						</div>
					</transition>
				</v-col>
			</v-row>

			<!-- Exibição das fotos lado a lado -->
			<v-row
				align="center"
				justify="center">
				<v-col
					cols="12"
					md="6"
					class="d-flex justify-center">
					<transition-group
						name="slide-fade"
						mode="out-in"
						tag="div"
						class="avatars">
						<v-avatar
							size="150"
							class="mx-2"
							:key="'userPhoto'">
							<v-img
								contain
								height="150"
								width="150"
								:src="userImg"
								alt="Sua foto" />
						</v-avatar>
						<v-avatar
							size="150"
							class="mx-2"
							:key="'matchPhoto'">
							<v-img
								contain
								height="150"
								width="150"
								:src="matchInfo?.profileImage"
								alt="Foto do match" />
						</v-avatar>
					</transition-group>
				</v-col>
			</v-row>

			<!-- Texto de colaboração musical -->
			<v-row
				align="center"
				justify="center">
				<v-col
					cols="12"
					class="text-center">
					<p class="collaboration-text">{{ topTxt }}</p>
					<p class="collaboration-text">Que tal criar uma música juntos?</p>
				</v-col>
			</v-row>

			<!-- Botão para acessar a rota de mensagens -->
			<v-row
				align="center"
				justify="center">
				<v-col
					cols="12"
					class="text-center">
					<v-btn
						color="purple-darken-2"
						class="ma-4"
						variant="elevated"
						rounded="xl"
						size="x-large"
						@click="goToMessages">
						Enviar Mensagem
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script setup>
const authStore = useAuthStore();

const props = defineProps({
	// Definindo as propriedades esperadas
	matchInfo: {
		type: Object,
		default: () => null,
	},
});
const userImg = authStore.user.profileImage || "";
const emit = defineEmits(["close"]);
const topTxt = props.matchInfo?.name?.split(" ")[0] + " também curtiu você!";

// Navega para a rota de mensagens (defina a rota conforme sua aplicação)
function goToMessages() {
	emit("close");
	navigateTo(`/messages/${props.matchInfo.id}-${authStore?.user?.id}`);
}
</script>

<style scoped>
.match-dialog {
	background: linear-gradient(135deg, #170829 0%, #2f0f49 100%);
	min-height: 100vh;
	color: #fff;
	display: flex;
	align-items: center;
}

.match-header h2 {
	font-size: 2.5rem;
	margin-top: 20px;
}

/* Texto para colaboração */
.collaboration-text {
	font-size: 1.2rem;
	margin-top: 20px;
}

/* Animação slide-fade para as fotos */
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateY(20px);
	opacity: 0;
}

/* Animação fade para o cabeçalho */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

/* Ajuste dos avatares */
.avatars {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
