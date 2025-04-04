export type User = {
	id: number;
	name?: string;
	profileImage?: string;
	bio?: string;
	favoriteGenres: { id: number; nome: string }[];
	username?: string;
	password?: string;
	location: {
		address?: string;
		latitude: number;
		longitude: number;
		city?: string;
		state?: string;
		country?: string;
	};
};
