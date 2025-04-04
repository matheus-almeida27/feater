import { defineStore } from "pinia";
import type { User } from "~/types/types.global.ts";

export const useStaticStore = defineStore("static", {
	state: () => ({
		genres: [
			{ id: 1, nome: "Pop" },
			{ id: 2, nome: "Rock" },
			{ id: 3, nome: "Hip Hop" },
			{ id: 4, nome: "R&B" },
			{ id: 5, nome: "Eletrônica" },
			{ id: 6, nome: "Sertanejo" },
			{ id: 7, nome: "Funk" },
			{ id: 8, nome: "Pagode" },
			{ id: 9, nome: "Samba" },
			{ id: 10, nome: "Jazz" },
			{ id: 11, nome: "Blues" },
			{ id: 12, nome: "Clássica" },
			{ id: 13, nome: "Reggae" },
			{ id: 14, nome: "Country" },
			{ id: 15, nome: "Metal" },
			{ id: 16, nome: "Indie" },
			{ id: 17, nome: "Alternativo" },
			{ id: 18, nome: "K-Pop" },
			{ id: 19, nome: "Trap" },
			{ id: 20, nome: "EDM" },
			{ id: 21, nome: "House" },
			{ id: 22, nome: "Techno" },
			{ id: 23, nome: "Dubstep" },
			{ id: 24, nome: "Reggaeton" },
			{ id: 25, nome: "Latin Pop" },
			{ id: 26, nome: "Forró" },
			{ id: 27, nome: "Axé" },
			{ id: 28, nome: "Brega" },
			{ id: 29, nome: "Gospel" },
			{ id: 30, nome: "MPB" },
		] as { id: number; nome: string }[],
		users: [
			{
				id: 1,
				name: "Lucas Andrade",
				profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
				bio: "Beatmaker apaixonado por lo-fi e hip hop. Sempre em busca de novas colaborações!",
				favoriteGenres: [1, 5, 3],
				location: { latitude: -23.55052, longitude: -46.63331, address: "São Paulo, Brasil" }, // São Paulo, Brasil
			},
			{
				id: 2,
				name: "Mariana Souza",
				profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
				bio: "Cantora e compositora. Gosto de misturar pop com R&B.",
				favoriteGenres: [5, 12, 6],
				location: { latitude: -22.9068, longitude: -43.1729, address: "Rio de Janeiro, Brasil" }, // Rio de Janeiro, Brasil
			},
			{
				id: 3,
				name: "Fernando Oliveira",
				profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
				bio: "Produtor musical e guitarrista. Curto rock e música eletrônica.",
				favoriteGenres: [25, 15, 7],
				location: { latitude: -19.9167, longitude: -43.9345, address: "Belo Horizonte, Brasil" }, // Belo Horizonte, Brasil
			},
			{
				id: 4,
				name: "Isabela Lima",
				profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
				bio: "Violonista e compositora. Sempre compondo novas melodias.",
				favoriteGenres: [1, 3, 7],
				location: { latitude: -8.0476, longitude: -34.877, address: "Recife, Brasil" }, // Recife, Brasil
			},
		] as User[],
	}),
	actions: {
		addUser(user: any) {
			this.users.push(user);
		},
		updateUser(editedUser: User) {
			const authStore = useAuthStore();
			const user = this.users.find((user) => user.id == editedUser.id);
			if (user) {
				user.name = editedUser.name;
				user.bio = editedUser.bio;
				user.profileImage = editedUser.profileImage;
				user.favoriteGenres = editedUser.favoriteGenres;
				user.location = editedUser.location;
			}
			authStore.setUser(user);
		},
	},
	persist: true,
});
