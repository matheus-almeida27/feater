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
					@click="close()"
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
					<v-switch
						v-model="showNearby"
						:label-class="showNearby ? 'text-purple' : 'text-grey'"
						class="mb-4"
						hide-details
						color="purple-darken-1"
						label="Filtrar por usuários mais próximos">
					</v-switch>
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
const emit = defineEmits(["save", "close"]);

const showNearby = ref(true);
const selectedGenres = ref([]);
const staticStore = useStaticStore();

const save = () => {
	// emit("save");
};
const close = () => {
	emit("close");
};
</script>

<style scoped></style>
