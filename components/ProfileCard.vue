<template>
	<v-btn
		v-if="!matchedUser"
		color="deep-purple-darken-1"
		@click="saveProfile"
		variant="tonal"
		class="save-btn text-white"
		rounded="xl"
		><span class="text-white"> Salvar </span>
	</v-btn>
	<v-card class="w-100 rounded-xl overflow-y-auto">
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
				size="small"
				variant="tonal"
				color="purple-darken-2">
				<v-icon size="20"> mdi-chevron-down </v-icon>
			</v-btn>
		</v-card-title>
		<v-card-text class="pb-5 px-0">
			<v-row
				no-gutters
				class="mb-4">
				<v-img
					:src="userImage"
					contain
					transition="slide-y-reverse-transition"
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
					@click="$refs.fileInputRef?.click()"
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
			<v-row
				no-gutters
				class="mb-4">
				<span
					v-if="matchedUser"
					style="font-size: 1.4rem"
					class="d-flex justify-center text-center w-100">
					{{ userFullName }}
				</span>
				<v-text-field
					v-else
					v-model="userFullName"
					:readonly="!!matchedUser"
					variant="solo"
					:label="matchedUser ? '' : 'Nome'"
					rounded="xl"
					class="mb-3"
					hide-details
					outlined
					dense></v-text-field>
			</v-row>
			<!-- Biografia -->
			<v-row
				no-gutters
				class="mb-4">
				<span
					v-if="matchedUser"
					style="font-size: 1rem"
					class="d-flex text-center font-weight-light">
					{{ bio }}
				</span>
				<v-textarea
					v-else
					:label="matchedUser ? '' : 'Biografia'"
					rounded="xl"
					v-model="bio"
					:rules="[(v) => v.length <= 200 || 'Máximo: 200 caracteres']"
					auto-grow
					:readonly="!!matchedUser"
					variant="solo"
					rows="3"
					outlined></v-textarea>
			</v-row>

			<!-- Roles -->
			<div
				v-if="matchedUser"
				class="card-genres">
				<span
					v-for="(role, index) in selectedRoles"
					:key="index"
					:class="['genre-tag mb-2 ', { 'is-favorite': isFavoriteRole(role) }]">
					{{ role.name }}
				</span>
			</div>
			<v-select
				v-if="!matchedUser"
				v-model="selectedRoles"
				:items="staticStore?.roles"
				:label="matchedUser ? '' : 'Ramos Artísticos'"
				multiple
				:clearable="!matchedUser"
				rounded="xl"
				:menu-icon="matchedUser ? '' : '$dropdown '"
				:readonly="!!matchedUser"
				return-object
				item-title="name"
				:closable-chips="!matchedUser"
				variant="solo"
				chips
				outlined
				dense></v-select>
			<!-- Gêneros Musicais (até 3 seleções) -->
			<div
				v-if="matchedUser"
				class="card-genres mb-4">
				<span
					v-for="(genre, index) in selectedGenres"
					:key="index"
					:class="['genre-tag mb-2 ']">
					{{ genre.name }}
				</span>
			</div>
			<v-select
				v-if="!matchedUser"
				v-model="selectedGenres"
				:items="staticStore?.genres"
				:label="matchedUser ? '' : 'Gêneros Musicais'"
				multiple
				:clearable="!matchedUser"
				rounded="xl"
				:menu-icon="matchedUser ? '' : '$dropdown '"
				:readonly="!!matchedUser"
				return-object
				item-title="name"
				:closable-chips="!matchedUser"
				variant="solo"
				chips
				outlined
				dense></v-select>
			<!-- Endereço -->
			<AddressInput
				@updateLocation="updateLocation"
				:location
				:matched-user
				:blocked="Boolean(matchedUser)" />
		</v-card-text>
		<v-card-actions v-if="chatId">
			<v-btn
				block
				color="red"
				variant="tonal"
				rounded="xl"
				@click="removeFeat">
				<v-icon
					class="mr-2"
					color="red"
					>mdi-leaf-off</v-icon
				>
				<span> Remover Feat </span>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
	import { useDisplay } from "vuetify";
	const props = defineProps({
		matchedUser: {
			type: Object,
			required: false,
		},
	});

	const emit = defineEmits(["close"]);
	const authStore = useAuthStore();
	const staticStore = useStaticStore();
	const filtersStore = useFiltersStore();
	const chatId = useRoute().params?.chatId;

	const userContext = props.matchedUser || authStore.user;
	const authUserId = props.matchedUser?.id || authStore.user?.id;

	const fileInputRef = ref();

	const userEditing = ref({ id: authUserId });

	const importedImage = ref();
	const importedImgUrl = ref("");
	const userFullName = ref(userContext?.name || "Future Hendrix");
	const bio = ref(userContext?.bio || "Bora fazer um som?");
	const selectedRoles = ref(
		userContext?.favoriteRoles || [
			{ id: 3, name: "Produtor(a) Musical" },
			{ id: 6, name: "DJ" },
		],
	);
	const selectedGenres = ref(
		userContext?.favoriteGenres || [
			{ id: 3, name: "Hip Hop" },
			{ id: 4, name: "R&B" },
			{ id: 19, name: "Trap" },
		],
	);
	const location = ref(userContext?.location || {});

	const userImage = computed(() => {
		return (
			importedImgUrl.value ||
			userContext?.profileImage ||
			"https://media.gq.com/photos/6255cb439aa7a6f3a12583da/master/w_1600%2Cc_limit/GQ0522_Future_11.jpg"
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
		const file = event?.target.files[0]; // Extrai o primeiro arquivo
		if (!file) {
			importedImgUrl.value = "";
			return;
		}
		createImage(file); // Passa o arquivo diretamente, sem casting
	};

	const maxWidth = computed(() => {
		const { sm, md, lg } = useDisplay();
		return sm ? "100%" : md ? "80%" : "60%";
	});
	// Função para criar a URL da imagem
	const createImage = async (file) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			importedImgUrl.value = e?.target?.result;
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
			favoriteRoles: selectedRoles.value,
			favoriteGenres: selectedGenres.value,
		};
		if (!validUserProfile(userEditing.value)) {
			staticStore.alertSnackbar("Preencha todos os campos");
			return;
		}
		staticStore.updateUser(userEditing.value);
		staticStore.alertSnackbar("Perfil salvo com sucesso!");
		navigateTo("/home");
	}

	function removeFeat() {
		navigateTo("/messages");
		useChatsStore().removeChat(Number(chatId));
	}
	const isFavoriteRole = (role) => {
		return userContext?.favoriteRoles.some((r) => r.id == role.id);
	};
	const isFavoriteGenre = (genre) => {
		return userContext?.favoriteGenres.some((g) => g.id == genre.id);
	};
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

	.card-genres {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 4px;
	}

	.genre-tag {
		background: linear-gradient(176deg, #51034b 0%, #0d000c 100%);
		padding: 5px 10px;
		border-radius: 20px;
		font-size: 12px;
		backdrop-filter: blur(10px);
	}
</style>
