<template>
	<div>
		<v-slide-y-reverse-transition hide-on-leave>
			<v-col
				cols="12"
				class="ma-0 pa-0"
				v-if="!address">
				<v-btn
					:loading
					@click="getCurrentLocation"
					block
					rounded="xl"
					color="purple-darken-3">
					<v-icon class="mr-2"> mdi-map-marker </v-icon>
					OBTER LOCALIZAÇÃO</v-btn
				>
			</v-col>
		</v-slide-y-reverse-transition>
		<v-slide-y-transition hide-on-leave>
			<v-col
				cols="12"
				class="ma-0 pa-0"
				v-if="address">
				<v-text-field
					variant="solo"
					disabled
					class="mb-3"
					hide-details
					:value="formatedAddress"
					outlined
					dense></v-text-field>
				<v-btn
					@click="resetLocation"
					block
					rounded="xl"
					variant="tonal"
					color="red-lighten-1">
					<v-icon class="mr-2"> mdi-map-marker </v-icon>
					remover localização</v-btn
				>
			</v-col>
		</v-slide-y-transition>
	</div>
</template>
<script setup>
const loading = ref(false);
const address = ref("");
const error = ref("");
const latitude = ref("");
const longitude = ref("");

const formatedAddress = computed(() => {
	if (address.value) {
		return `${address.value.city}, ${address.value.state}, ${address.value.country}`;
	}
	return "";
});

const getCurrentLocation = () => {
	loading.value = true;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				latitude.value = position.coords.latitude.toFixed(6);
				longitude.value = position.coords.longitude.toFixed(6);
				error.value = "";
				// Chama a função de reverse geocoding
				await reverseGeocode();
			},
			(err) => {
				console.error(err);
				address.value = "";
				error.value = "Não foi possível obter a localização.";
				loading.value = false;
			},
			{
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 0,
			}
		);
	} else {
		error.value = "A API de Geolocalização não é suportada pelo seu navegador.";
	}
};

async function reverseGeocode() {
	if (latitude.value && longitude.value) {
		try {
			const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude.value}&lon=${longitude.value}&format=json`;

			const response = await fetch(url, {
				headers: {
					"User-Agent": "FeaterApp/1.0 (matheus.fdealmeida@hotmail.com)",
				},
			});
			const data = await response.json();
			if (data && data.address) {
				address.value = {
					city: data.address.city || data.address.town || data.address.village || "Desconhecida",
					state: data.address.state || "Desconhecido",
					country: data.address.country || "Desconhecido",
				};
				error.value = "";
			} else {
				error.value = "Endereço não encontrado";
			}
		} catch (err) {
			console.error(err);
			error.value = "Erro ao obter o endereço";
		}
	} else {
		error.value = "Por favor, insira a latitude e longitude";
	}
	loading.value = false;
}

const resetLocation = () => {
	address.value = "";
	latitude.value = "";
	longitude.value = "";
	error.value = "";
};
</script>

<style scoped></style>
