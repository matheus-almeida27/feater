import type { User } from "./../types/types.global";
export const validUserProfile = (user: User | null) => {
	return (
		user?.name &&
		user.bio &&
		user.favoriteGenres.length > 0 &&
		user.location.latitude &&
		user.location.longitude
	)
};
