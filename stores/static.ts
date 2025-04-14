import { defineStore } from "pinia";
import type { Genre, User } from "~/types/types.global.ts";

export const useStaticStore = defineStore("static", {
	state: () => ({
		genres: [
			{ id: 1, name: "Pop" },
			{ id: 2, name: "Rock" },
			{ id: 3, name: "Hip Hop" },
			{ id: 4, name: "R&B" },
			{ id: 5, name: "Eletrônica" },
			{ id: 6, name: "Sertanejo" },
			{ id: 7, name: "Funk" },
			{ id: 8, name: "Pagode" },
			{ id: 9, name: "Samba" },
			{ id: 10, name: "Jazz" },
			{ id: 11, name: "Blues" },
			{ id: 12, name: "Clássica" },
			{ id: 13, name: "Reggae" },
			{ id: 14, name: "Country" },
			{ id: 15, name: "Metal" },
			{ id: 16, name: "Indie" },
			{ id: 17, name: "Alternativo" },
			{ id: 18, name: "K-Pop" },
			{ id: 19, name: "Trap" },
			{ id: 20, name: "EDM" },
			{ id: 21, name: "House" },
			{ id: 22, name: "Techno" },
			{ id: 23, name: "Dubstep" },
			{ id: 24, name: "Reggaeton" },
			{ id: 25, name: "Latin Pop" },
			{ id: 26, name: "Forró" },
			{ id: 27, name: "Axé" },
			{ id: 28, name: "Brega" },
			{ id: 29, name: "Gospel" },
			{ id: 30, name: "MPB" },
		] as Genre[],
		users: [
			{
				id: 1,
				name: "Snoop Dogg",
				username: "snoop.dogg",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/9b/5d/c2/9b5dc229ad7aae6352f1474de7004ec6.jpg",
				bio: "Lenda do West Coast rap, conhecido por seu flow relaxado e carisma inconfundível.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 2, name: "G-Funk" },
					{ id: 3, name: "Reggae" },
				],
				likedUsers: [],
				location: {
					latitude: 33.8358,
					longitude: -118.3406,
					address: "Long Beach, CA, EUA",
				},
			},
			{
				id: 2,
				name: "Wiz Khalifa",
				username: "wiz.khalifa",
				password: "1",
				profileImage:
					"https://www.shutterstock.com/editorial/image-editorial/O5T0IezeOfT7g7z5NDIwNQ==/wiz-khalifa-440nw-9174735cj.jpg",
				bio: "Rapper e entusiasta da cannabis, conhecido por hits como 'See You Again' e 'Black and Yellow'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 4, name: "Trap" },
					{ id: 5, name: "Pop Rap" },
				],
				likedUsers: [],
				location: {
					latitude: 40.4406,
					longitude: -79.9959,
					address: "Pittsburgh, PA, EUA",
				},
			},
			{
				id: 3,
				name: "50 Cent",
				username: "50.cent",
				password: "1",
				profileImage: "https://i.scdn.co/image/6f0da41419b31d9d2ba55d2df212f59ad0668118",
				bio: "Empresário e rapper, conhecido por 'In Da Club' e sua trajetória de superação.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 6, name: "Gangsta Rap" },
					{ id: 7, name: "East Coast Rap" },
				],
				likedUsers: [],
				location: {
					latitude: 40.7128,
					longitude: -74.006,
					address: "Nova York, NY, EUA",
				},
			},
			{
				id: 4,
				name: "Eminem",
				username: "eminem",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/7d/ed/c7/7dedc7205149ae1171c14519443addbe.jpg",
				bio: "Rapper lendário, conhecido por suas letras intensas e habilidade lírica incomparável.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 8, name: "Rap Hardcore" },
					{ id: 9, name: "Hip Hop Alternativo" },
				],
				likedUsers: [],
				location: {
					latitude: 42.3314,
					longitude: -83.0458,
					address: "Detroit, MI, EUA",
				},
			},
			{
				id: 5,
				name: "Rihanna",
				username: "rihanna",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/3b/53/15/3b53152800cca8e43051df338e81d0c1.jpg",
				bio: "Cantora e empresária, conhecida por sua versatilidade musical e estilo marcante.",
				favoriteGenres: [
					{ id: 10, name: "Pop" },
					{ id: 11, name: "R&B" },
					{ id: 12, name: "Dancehall" },
				],
				likedUsers: [],
				location: {
					latitude: 13.1132,
					longitude: -59.5988,
					address: "Bridgetown, Barbados",
				},
			},
			{
				id: 6,
				name: "Drake",
				username: "drake",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/34/c1/2f/34c12f83386aa7ac38642b282c8ffb73.jpg",
				bio: "Artista canadense que mistura rap e R&B, conhecido por hits globais e versatilidade.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 11, name: "R&B" },
					{ id: 13, name: "Pop" },
				],
				likedUsers: [],
				location: {
					latitude: 43.651,
					longitude: -79.347,
					address: "Toronto, ON, Canadá",
				},
			},
			{
				id: 7,
				name: "Cardi B",
				username: "cardi.b",
				password: "1",
				profileImage: "https://i.pinimg.com/originals/f0/43/44/f04344ef6c6630552d5fb64acf1cb7eb.jpg",
				bio: "Rapper e personalidade da mídia, conhecida por sua autenticidade e hits contagiantes.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 4, name: "Trap" },
					{ id: 14, name: "Latin Trap" },
				],
				likedUsers: [],
				location: {
					latitude: 40.7128,
					longitude: -74.006,
					address: "Nova York, NY, EUA",
				},
			},
			{
				id: 8,
				name: "Travis Scott",
				username: "travis.scott",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/9c/37/f5/9c37f52a210cb0918e3fe72c18dda975.jpg",
				bio: "Rapper e produtor conhecido por seu som psicodélico e performances imersivas. Criador do álbum 'Astroworld' e do recente 'Utopia'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 4, name: "Trap" },
					{ id: 15, name: "Rap Psicodélico" },
				],
				likedUsers: [],
				location: {
					latitude: 29.7604,
					longitude: -95.3698,
					address: "Houston, TX, EUA",
				},
			},
			{
				id: 9,
				name: "Kendrick Lamar",
				username: "kendrick.lamar",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/27/ee/88/27ee88438e2e272184937dc60701030c.jpg",
				bio: "Rapper e poeta lírico, vencedor do Prêmio Pulitzer. Conhecido por álbuns como 'DAMN.' e 'To Pimp a Butterfly'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 16, name: "Rap Consciente" },
					{ id: 17, name: "Jazz Rap" },
				],
				likedUsers: [],
				location: {
					latitude: 33.9806,
					longitude: -118.2167,
					address: "Compton, CA, EUA",
				},
			},
			{
				id: 10,
				name: "Nicki Minaj",
				username: "nicki.minaj",
				password: "1",
				profileImage: "https://i.pinimg.com/originals/8d/15/eb/8d15ebe67c010e2f4cad779a6a3b7061.jpg",
				bio: "Rapper e cantora com estilo ousado e versátil. Conhecida por hits como 'Super Bass' e 'Anaconda'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 10, name: "Pop" },
					{ id: 18, name: "Rap Pop" },
				],
				likedUsers: [],
				location: {
					latitude: 40.6782,
					longitude: -73.9442,
					address: "Brooklyn, NY, EUA",
				},
			},
			{
				id: 11,
				name: "Post Malone",
				username: "post.malone",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/1e/55/48/1e55489bba76259577f4ebf4d0728969.jpg",
				bio: "Cantor e rapper conhecido por misturar hip hop com rock e pop. Famoso por 'Rockstar' e 'Circles'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 10, name: "Pop" },
					{ id: 19, name: "Rock Alternativo" },
				],
				likedUsers: [],
				location: {
					latitude: 32.7767,
					longitude: -96.797,
					address: "Dallas, TX, EUA",
				},
			},
			{
				id: 12,
				name: "Doja Cat",
				username: "doja.cat",
				password: "1",
				profileImage: "https://i.pinimg.com/736x/96/27/b1/9627b1e3b0e8bca42f6b6fbb1be7551d.jpg",
				bio: "Cantora e rapper conhecida por sua criatividade e presença nas redes sociais. Sucessos incluem 'Say So' e 'Woman'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 10, name: "Pop" },
					{ id: 20, name: "R&B" },
				],
				likedUsers: [],
				location: {
					latitude: 34.0522,
					longitude: -118.2437,
					address: "Los Angeles, CA, EUA",
				},
			},
			{
				id: 13,
				name: "J. Cole",
				username: "j.cole",
				password: "1",
				profileImage: "https://i.pinimg.com/236x/3d/b4/32/3db4323fe2b9bbb244e2a1b9ca03c569.jpg",
				bio: "Rapper e produtor conhecido por suas letras introspectivas e álbuns como '2014 Forest Hills Drive'.",
				favoriteGenres: [
					{ id: 1, name: "Hip Hop" },
					{ id: 16, name: "Rap Consciente" },
					{ id: 21, name: "Soul" },
				],
				likedUsers: [],
				location: {
					latitude: 35.7796,
					longitude: -78.6382,
					address: "Fayetteville, NC, EUA",
				},
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
