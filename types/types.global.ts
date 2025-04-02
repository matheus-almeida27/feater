export type User = {
	id: number;
	name?: string;
	profilePicture?: string;
	bio?: string;
	favoriteGenres: Number[];
	username?: string;
	password?: string;
	location: { latitude: number; longitude: number; city?: string; state?: string; country?: string };
};
