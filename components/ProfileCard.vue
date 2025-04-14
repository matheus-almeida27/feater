<template>
	<v-btn
		v-if="!matchedUser"
		color="deep-purple-darken-1"
		@click="saveProfile"
		variant="tonal"
		class="save-btn text-white"
		rounded="xl"
		><v-icon
			class="mr-2"
			color="#fff"
			>mdi-check</v-icon
		><span class="text-white"> Salvar </span>
	</v-btn>
	<v-card class="w-100 rounded-xl">
		<v-card-title class="pt-3 pl-5 font-weight-light text-h4 mb-2 d-flex align-center">
			<span
				v-if="matchedUser"
				class="text-truncate">
				{{ matchedUser.name?.split(" ")[0] || "Perfil" }}
			</span>
			<v-spacer />
			<v-btn
				v-if="matchedUser"
				@click="close()"
				icon
				rounded="xl"
				class="border"
				size="small"
				variant="elevated"
				color="surface">
				<v-icon class=""> mdi-chevron-down </v-icon>
			</v-btn>
		</v-card-title>
		<v-card-text class="pb-5">
			<v-row
				no-gutters
				class="mb-4">
				<v-img
					:src="userImage"
					contain
					cover
					rounded="xl"
					max-height="400"
					min-height="200">
				</v-img>
			</v-row>
			<v-row
				v-if="!matchedUser"
				no-gutters
				class="mb-4 justify-center">
				<v-btn
					v-if="!importedImage"
					@click="$refs.fileInputRef.click()"
					block
					variant="tonal"
					rounded="xl"
					color="purple-darken-3">
					Alterar foto
				</v-btn>
				<v-btn
					@click="
						() => {
							importedImage = null;
							importedImgUrl = null;
						}
					"
					variant="tonal"
					:class="{ 'd-none': !importedImage }"
					rounded="xl"
					color="error"
					block
					>Remover foto</v-btn
				>
				<v-file-input
					:readonly="!!matchedUser"
					class="d-none"
					ref="fileInputRef"
					hide-details
					variant="solo"
					flat
					@change="onFileChange"
					density="compact"
					:clearable="false"
					v-model="importedImage"
					accept="image/*"
					prepend-icon=""></v-file-input>
			</v-row>
			<!-- Nome do Usuário -->
			<v-text-field
				v-model="userFullName"
				:readonly="!!matchedUser"
				variant="solo"
				label="Nome"
				rounded="xl"
				class="mb-3"
				hide-details
				outlined
				dense></v-text-field>
			<!-- Biografia -->
			<v-textarea
				label="Biografia"
				rounded="xl"
				v-model="bio"
				:rules="[(v) => v.length <= 200 || 'Máximo: 200 caracteres']"
				auto-grow
				:readonly="!!matchedUser"
				variant="solo"
				rows="3"
				outlined></v-textarea>

			<!-- Gêneros Musicais (até 3 seleções) -->
			<v-select
				v-model="selectedGenres"
				:items="staticStore?.genres"
				label="Gêneros Musicais"
				multiple
				rounded="xl"
				:menu-icon="matchedUser ? false : '$dropdown '"
				:readonly="!!matchedUser"
				return-object
				item-title="nome"
				:closable-chips="!matchedUser"
				variant="solo"
				chips
				outlined
				dense
				:rules="[limitGenres]"></v-select>
			<!-- Endereço -->
			<AddressInput
				@updateLocation="updateLocation"
				:location
				:blocked="Boolean(matchedUser)" />
		</v-card-text>
	</v-card>
</template>

<script setup>
	const props = defineProps({
		matchedUser: {
			type: Object,
			required: false,
		},
	});
	const emit = defineEmits(["close"]);
	const authStore = useAuthStore();
	const staticStore = useStaticStore();

	const userContext = props.matchedUser || authStore.user;
	const authUserId = props.matchedUser?.id || authStore.user?.id;

	const fileInputRef = ref();

	const userEditing = ref({ id: authUserId });

	const importedImage = ref();
	const importedImgUrl = ref("");
	const userFullName = ref(userContext?.name || "");
	const bio = ref(userContext?.bio || "");
	const selectedGenres = ref(userContext?.favoriteGenres || []);
	const location = ref(userContext?.location || {});

	const userImage = computed(() => {
		return (
			importedImgUrl.value ||
			userContext.profileImage ||
			"https://media.gq.com/photos/6255cb439aa7a6f3a12583da/master/w_1600%2Cc_limit/GQ0522_Future_11.jpg"
		);
	});

	const limitGenres = (value) => {
		if (value.length > 3) {
			return "Máximo: 3 gêneros";
		}
		return true;
	};

	// FUNÇÕES INICIAIS
	onMounted(() => {
		if (authUserId) {
			// Aqui você pode buscar os dados do usuário no banco de dados usando o authUserId
			// e preencher os campos iniciais, como userFullName, importedImgUrl, etc.
		}
	});

	// Função ajustada para lidar com o evento de mudança do input
	const onFileChange = (event) => {
		const file = event.target.files[0]; // Extrai o primeiro arquivo
		if (!file) {
			importedImgUrl.value = "";
			return;
		}
		createImage(file); // Passa o arquivo diretamente, sem casting
	};

	// Função para criar a URL da imagem
	const createImage = async (file) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			importedImgUrl.value = e.target.result;
		};
		reader.readAsDataURL(file);
	};

	const updateLocation = (loc) => {
		location.value = loc;
	};

	function close() {
		emit("close");
	}

	function saveProfile() {
		// Implemente a lógica de salvamento do perfil aqui
		userEditing.value = {
			id: authUserId,
			location: location.value,
			name: userFullName.value,
			bio: bio.value,
			profileImage: userImage.value,
			favoriteGenres: selectedGenres.value,
		};
		if (!validUserProfile(userEditing.value)) {
			alert("Preencha todos os campos");
			return;
		}
		staticStore.updateUser(userEditing.value);
		alert("Perfil salvo com sucesso!");
		navigateTo("/home");
	}
</script>

<style scoped lang="scss">
	.v-card {
		background-color: var(--v-theme-surface);
	}

	.save-btn {
		position: fixed;
		z-index: 99999 !important;
		right: 4px;
		top: 4px;
		margin-top: 10px;
		margin-right: 10px;
	}
</style>
