<template>
	<div class="inner-card">
		<div class="card-content">
			<v-img
				draggable="false"
				v-if="card.profileImage"
				:src="card.profileImage"
				cover
				alt="Imagem"
				class="card-img" />
			<p class="card-name">{{ card.name }}</p>
			<p class="card-address font-weight-regular">{{ card.location.address }}</p>
			<p class="card-address text-purple-accent-2 font-weight-light mt-1 mb-2">
				<v-icon
					size="20"
					class="mr-1 mt-n1">
					mdi-airplane </v-icon
				>{{ kmsAway }}
			</p>
			<div class="card-genres">
				<span
					v-for="(role, index) in roles"
					:key="index"
					:class="[
						'genre-tag border mb-2 ',
						{ 'is-favorite': isFavoriteRole(role), 'in-filter': isRoleInFilter(role) },
					]">
					{{ role.name }}
				</span>
			</div>
			<div class="card-genres">
				<span
					v-for="(genre, index) in genres"
					:key="index"
					:class="[
						'genre-tag border mb-2 ',
						{
							'is-favorite': isFavoriteGenre(genre),
							'in-filter': isGenreInFilter(genre),
						},
					]">
					{{ genre.name }}
				</span>
			</div>
		</div>
		<!-- Bio -->
		<v-expand-transition>
			<v-row
				v-if="!showBio"
				no-gutters
				class="justify-center">
				<v-icon
					class="mt-1"
					size="25"
					>mdi-chevron-up</v-icon
				>
			</v-row>
		</v-expand-transition>

	</div>
</template>

<script lang="ts" setup>
	const filtersStore = useFiltersStore();

	const props = defineProps({
		card: {
			type: Object,
			required: true,
		},
		showBio: {
			type: Boolean,
			default: false,
		},
	});

	const user = useAuthStore().user;

	const roles = computed(() => {
		return props.card.favoriteRoles || [];
	});
	const genres = computed(() => {
		return props.card.favoriteGenres || [];
	});
	const isFavoriteRole = (role: any) => {
		return user?.favoriteRoles.some((r: any) => r.id == role.id);
	};
	const isFavoriteGenre = (genre: any) => {
		return user?.favoriteGenres.some((g: any) => g.id == genre.id);
	};

	const isRoleInFilter = (role: any) => {
		return filtersStore?.roles.some((r: any) => r.id == role.id);
	};
	const isGenreInFilter = (genre: any) => {
		return filtersStore?.genres.some((g: any) => g.id == genre.id);
	};

	const kmsAway = getKmsAway(props.card);
</script>

<style lang="scss" scoped>
	* {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}
	img {
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-o-user-select: none;
		user-select: none;
	}
	.inner-card {
		width: 100%;
		max-width: 380px;
		border-radius: 15px;

		background: linear-gradient(138deg, #170015 0%, #0d000c 100%);
		color: white;
		text-align: center;
		padding: 20px;
		cursor: grab;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.3s ease-in-out;
		position: relative;

		box-shadow: 0 8px 16px rgba(27, 27, 27, 0.5);
	}

	.card-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card-img {
		width: 100%;
		min-height: 150px;
		max-height: 350px;

		// object-fit: cover;
		border-radius: 10px;
	}

	.card-name {
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
	}

	.card-address {
		font-size: 14px;
		color: #ccc;
		margin: 5px 0;
	}

	.card-genres {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 4px;
	}

	.genre-tag {
		background: linear-gradient(138deg, #170015 0%, #0d000c 100%);
		padding: 5px 10px;
		border-radius: 20px;
		font-size: 12px;
		backdrop-filter: blur(10px);
		&.is-favorite {
			background: linear-gradient(138deg, #8b0580 0%, #4a0244 100%) !important;
		}
		&.in-filter {
			border: 1px solid #06eaee !important;
		}
	}

	.card-bio {
		font-size: 14px;
		height: 70px;
		color: #ddd;
	}

	/* Animação para expandir a bio */
	.expand-enter-active,
	.expand-leave-active {
		transition: max-height 0.3s ease-in-out, opacity 0.3s;
	}

	.expand-enter-from,
	.expand-leave-to {
		max-height: 0;
		opacity: 0;
	}
</style>
