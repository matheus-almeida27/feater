<template>
	<v-card class="w-100 rounded-xl">
		<v-card-title
			class="pt-3 pl-5 font-weight-light text-h4 mb-2 d-flex justify-space-between align-center">
			<span> Perfil </span>
			<v-btn
				color="purple-darken-3"
				@click="saveProfile"
				variant="elevated"
				class="pr-4 pl-3"
				rounded="xl"
				><v-icon class="mr-2">mdi-check</v-icon> Salvar</v-btn
			>
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
				variant="solo"
				label="Nome"
				class="mb-3"
				hide-details
				outlined
				dense></v-text-field>
			<!-- Biografia -->
			<v-textarea
				label="Biografia"
				v-model="bio"
				variant="solo"
				rows="3"
				outlined></v-textarea>

			<!-- Gêneros Musicais (até 3 seleções) -->
			<v-select
				v-model="selectedGenres"
				:items="staticStore?.genres"
				label="Gêneros Musicais"
				multiple
				return-object
				item-title="nome"
				closable-chips
				variant="solo"
				chips
				outlined
				dense
				:rules="[limitGenres]"></v-select>
			<!-- Endereço -->
			<AddressInput
				@updateLocation="updateLocation"
				:location />
		</v-card-text>
	</v-card>
</template>

<script setup>
	const authStore = useAuthStore();
	const staticStore = useStaticStore();

	const userAuth = authStore.user;
	const authUserId = authStore.user?.id;

	const fileInputRef = ref();

	const userEditing = ref({ id: authUserId });

	const importedImage = ref();
	const importedImgUrl = ref("");
	const userFullName = ref(userAuth?.name || "");
	const bio = ref(userAuth?.bio || "");
	const selectedGenres = ref(userAuth?.favoriteGenres || []);
	const location = ref(userAuth?.location || {});

	const limitGenres = (value) => {
		if (value.length > 3) {
			return "Máximo: 3 gêneros";
		}
		return true;
	};

	const userImage = computed(() => {
		return (
			importedImgUrl.value ||
			authStore.user?.profileImage ||
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JvoWVGditC7vWDv3xQmKMlICOgg3Igw4aw&s"
		);
	});

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

<style scoped></style>
