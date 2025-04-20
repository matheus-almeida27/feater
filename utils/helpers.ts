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
