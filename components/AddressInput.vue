<template>
	<div>
		<v-expand-transition>
			<v-col
				cols="12"
				class="ma-0 pa-0 w-100 d-flex justify-center"
				v-if="!address">
				<v-badge
					color="warning"
					class="w-100"
					offset-x="8">
					<v-btn
						:loading
						@click="getCurrentLocation"
						block
						rounded="xl"
						class="w-100"
						color="purple-darken-3">
						<v-icon class="mr-2"> mdi-map-marker </v-icon>
						OBTER LOCALIZAÇÃO</v-btn
					>
				</v-badge>
			</v-col>
		</v-expand-transition>
		<v-expand-transition hide-on-leave>
			<v-col
				cols="12"
				class="ma-0 pa-0"
				v-if="address">
				<span
					v-if="props.blocked"
					class="text-truncate d-flex justify-center">
					{{ formatedAddress }}
				</span>
				<v-text-field
					v-if="!props.blocked"
					:variant="props.blocked ? 'plain' : 'solo'"
					disabled
					class="mb-3"
					rounded="xl"
					hide-details
					:value="formatedAddress"
					dense></v-text-field>
				<v-btn
					v-if="!props.blocked"
					@click="resetLocation"
					block
					rounded="xl"
					variant="tonal"
					color="error">
					<v-icon class="mr-2"> mdi-map-marker </v-icon>
					remover localização</v-btn
				>
			</v-col>
		</v-expand-transition>
	</div>
</template>
<script setup>
	const emit = defineEmits(["updateLocation"]);
	const props = defineProps({
		location: {
			type: Object,
			default: () => ({}),
		},
		blocked: {
			default: false,
		},
	});

	const loading = ref(false);
	const address = ref(props.location?.address || "");
	const error = ref("");
	const latitude = ref(props.location?.latitude || "");
	const longitude = ref(props.location?.longitude || "");

	const formatedAddress = computed(() => {
		if (props.location?.address) {
			return `${props.location?.address}`;
		} else if (address.value) {
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
				},
			);
		} else {
			error.value = "A API de Geolocalização não é suportada pelo seu navegador.";
			resetLocation();
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
						city:
							data.address.city ||
							data.address.town ||
							data.address.village ||
							"Desconhecida",
						state: data.address.state || "Desconhecido",
						country: data.address.country || "Desconhecido",
					};
					emit("updateLocation", {
						latitude: latitude.value,
						longitude: longitude.value,
						address: formatedAddress.value,
					});
					error.value = "";
				} else {
					error.value = "Endereço não encontrado";
					resetLocation();
				}
			} catch (err) {
				error.value = "Erro ao obter o endereço";
				resetLocation();
			}
		} else {
			error.value = "Por favor, insira a latitude e longitude";
			resetLocation();
		}
		loading.value = false;
	}

	const resetLocation = () => {
		address.value = "";
		latitude.value = "";
		longitude.value = "";
		loading.value = false;
		emit("updateLocation", {
			latitude: "",
			longitude: "",
			address: "",
		});
	};
</script>

<style scoped></style>
