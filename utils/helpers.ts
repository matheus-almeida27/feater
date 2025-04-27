import type { Genre, User } from "./../types/types.global";

let staticStore: any;
export const validUserProfile = (user: User | null) => {
	return (
		user?.name &&
		user.bio &&
		user.favoriteRoles.length > 0 &&
		user.favoriteGenres.length > 0 &&
		user.location.latitude &&
		user.location.longitude
	);
};

export const populateUsersInfo = () => {
	staticStore = useStaticStore();
	const needsToPopulate = staticStore.users.some((user: User) => user.bio == "");
	if (needsToPopulate) {
		staticStore.users.forEach((user: User) => {
			if (user.id >= 15 && user.id <= 29) {
				user.favoriteRoles = [
					...getRandomFavoriteSet("role", 2), // random function to get 2 random roles
				];
				user.favoriteGenres = [
					...getRandomFavoriteSet("genre", 3), // random function to get 3 random genres
				];
				user.bio = `Moro em ${user.location.address?.split(",")[0]}, sou ${
					user.favoriteRoles[0].name
				} e ${user.favoriteRoles[1].name}.
				Gosto de ${user.favoriteGenres[0].name}, ${user.favoriteGenres[1].name} e ${
					user.favoriteGenres[2].name
				}.`;
			}
		});
	}
};

export const getRandomFavoriteSet = (type: "role" | "genre", count: number) => {
	const favorites = type === "genre" ? staticStore.genres : staticStore.roles;
	const randomFavorites = new Set<Genre>();
	while (randomFavorites.size < count) {
		const randomIndex = Math.floor(Math.random() * favorites.length);
		randomFavorites.add(favorites[randomIndex]);
	}
	return Array.from(randomFavorites);
};

export const getKmsAway = (user: any) => {
	//calcula a distância entre o usuário e o card basado na localização longitude e latitude
	if (user.location && user.location.latitude && user.location.longitude) {
		const userLocation = useAuthStore().user?.location;
		if (userLocation) {
			const distance = calculateDistance(
				userLocation.latitude,
				userLocation.longitude,
				user.location.latitude,
				user.location.longitude,
			);
			return `${Number(distance.toFixed(0)).toLocaleString()} km de você`;
		}
	}
	return "";
};
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
	const R = 6371; // Raio da Terra em km
	const dLat = ((lat2 - lat1) * Math.PI) / 180;
	const dLon = ((lon2 - lon1) * Math.PI) / 180;
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos((lat1 * Math.PI) / 180) *
			Math.cos((lat2 * Math.PI) / 180) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c; // Distância em km
};
