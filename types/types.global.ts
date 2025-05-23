export type User = {
	id: number;
	name?: string;
	profileImage?: string;
	bio?: string;
	favoriteGenres: Genre[];
	favoriteRoles: Role[];
	username?: string;
	password?: string;
	likedUsers: number[];
	location: {
		address?: string;
		latitude: number;
		longitude: number;
		city?: string;
		state?: string;
		country?: string;
	};
};

export type Chat = {
	id: number;
	participants: number[];
	messages: Message[]; // Se optar por armazenar as mensagens internamente.
};

export type Message = {
	id: number;
	chatId: number;
	sender: number;
	text: string;
	timestamp: string; // Formato ISO 8601, ex: "2023-10-01T12:00:00Z"
};
export type Genre = {
	id: number;
	name: string;
};
export type Role = {
	id: number;
	name: string;
};
