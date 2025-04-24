<template>
	<v-col
		cols="12"
		md="8"
		lg="6"
		xl="4"
		class="d-flex ma-0 pa-0 justify-center align-center">
		<v-card class="w-100 rounded-xl">
			<v-card-title class="pt-3 pl-5 font-weight-light text-h5 mb-2 d-flex align-center">
				<span class="text-truncate"> Filtros </span>
				<v-spacer />
				<v-btn
					@click="emit('close')"
					icon
					rounded="xl"
					size="small"
					variant="elevated"
					color="">
					<v-icon
						size="30"
						class="">
						mdi-close
					</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text class="pb-1 px-0 d-flex flex-column justify-center align-center">
				<v-row
					no-gutters
					class="justify-center align-center mb-2">
					<div class="d-flex w-100 align-center justify-center pa-3 mx-8 nearby_warn">
						<span class="text-center font-weight-light">
							Por padrão, nós mostramos primeiro os usuários mais próximos em relação
							à você</span
						>
					</div>
				</v-row>
				<v-row
					no-gutters
					class="w-100 justify-center align-center mb-6 px-6">
					<v-select
						v-model="selectedRoles"
						:items="staticStore?.roles"
						label="Ramos Artísticos"
						multiple
						rounded="xl"
						hide-details
						return-object
						clearable
						item-title="name"
						variant="solo"
						chips
						outlined
						dense></v-select>
				</v-row>
				<v-row
					no-gutters
					class="w-100 justify-center align-center mb-6 px-6">
					<v-select
						v-model="selectedGenres"
						:items="staticStore?.genres"
						label="Gêneros Musicais"
						multiple
						rounded="xl"
						hide-details
						clearable
						return-object
						item-title="name"
						variant="solo"
						chips
						outlined
						dense></v-select>
				</v-row>
				<v-row
					no-gutters
					class="w-100 justify-center align-center mb-4 px-6">
					<v-btn
						@click="save()"
						block
						rounded="xl"
						variant="elevated"
						color="purple-darken-1">
						Aplicar
					</v-btn>
				</v-row>
			</v-card-text>
		</v-card>
	</v-col>
</template>
<script setup lang="ts">
	const emit = defineEmits(["close"]);
	const filtersStore = useFiltersStore();
	const staticStore = useStaticStore();

	const showNearby = ref(filtersStore.nearbyUsers);
	const selectedGenres = ref(filtersStore.genres);
	const selectedRoles = ref(filtersStore.roles);
	const save = () => {
		filtersStore.nearbyUsers = showNearby.value;
		filtersStore.genres = selectedGenres.value;
		filtersStore.roles = selectedRoles.value;
		emit("close");
		staticStore.alertSnackbar("Filtros aplicados!");
	};
</script>

<style scoped lang="scss">
	.nearby_warn {
		border-radius: 8px;
		border: 1px solid purple;
		background-color: rgb(37, 0, 37);
		color: rgb(236, 60, 236);
	}
</style>
