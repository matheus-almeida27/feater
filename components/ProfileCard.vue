<template>
	<v-card class="w-100 rounded-xl mb-14">
		<v-card-title class="pt-3 pl-5 font-weight-light text-h4 mb-2 d-flex justify-space-between align-center">
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
		<v-card-text>
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
					variant="solo"
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
				:items="genres"
				label="Selecione até 3 gêneros musicais"
				multiple
				variant="solo"
				chips
				clearable
				outlined
				dense
				:rules="[limitGenres]"></v-select>

			<!-- Endereço -->
			<v-text-field
				label="Endereço"
				variant="solo"
				v-model="address"
				outlined
				dense></v-text-field>
		</v-card-text>
	</v-card>
</template>

<script setup>
const importedImgUrl = ref("");
const fileInputRef = ref();
const valid = ref(false);
const importedImage = ref();
const bio = ref("");
const selectedGenres = ref([]);
const address = ref("");

const genres = ["Rock", "Pop", "Hip Hop", "Jazz", "Eletrônica", "MPB", "Sertanejo", "Clássica"];

const userImage = computed(() => {
	console.log("importedImage.value", importedImage.value);
	console.log(" userImage | importedImgUrl.value:", importedImgUrl.value);
	return (
		importedImgUrl.value ||
		"https://cdn.wallpaperhub.app/cloudcache/9/8/1/e/8/e/981e8e91f90c93bf5e715527e1922724645f1214.jpg"
	);
});

// Função ajustada para lidar com o evento de mudança do input
const onFileChange = (event) => {
	const file = event.target.files[0]; // Extrai o primeiro arquivo
	console.log(" onFileChange | event.target:", event.target.files[0]);
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
		importedImgUrl.value = e.target.result; // Define a URL da imagem
	};
	reader.readAsDataURL(file); // Lê o arquivo como Data URL
};
function saveProfile() {
	// Implemente a lógica de salvamento do perfil aqui
	console.log("Perfil salvo:", {
		importedImage: importedImage.value,
		bio: bio.value,
		selectedGenres: selectedGenres.value,
		address: address.value,
	});
}
</script>

<style scoped>
/* Estilos customizados, se necessário */
</style>
