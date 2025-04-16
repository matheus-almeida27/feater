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
			{ id: 26, name: "Afrobeats" },
			{ id: 27, name: "Amapiano" },
			{ id: 28, name: "Phonk" },
			{ id: 29, name: "Gospel" },
			{ id: 30, name: "MPB" },
		] as Genre[],
		users: [
			{
				id: 1,
				name: "Snoop Dogg",
				username: "snoop.dogg",
				password: "1",
				profileImage:
					"https://i.pinimg.com/736x/9b/5d/c2/9b5dc229ad7aae6352f1474de7004ec6.jpg",
				bio: "Lenda do West Coast rap, conhecido por seu flow relaxado e carisma inconfundível.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 7, name: "Funk" },
					{ id: 13, name: "Reggae" },
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
					{ id: 3, name: "Hip Hop" },
					{ id: 19, name: "Trap" },
					{ id: 1, name: "Pop" },
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
				favoriteGenres: [{ id: 3, name: "Hip Hop" }],
				likedUsers: [3],
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
				profileImage:
					"https://i.pinimg.com/736x/7d/ed/c7/7dedc7205149ae1171c14519443addbe.jpg",
				bio: "Rapper lendário, conhecido por suas letras intensas e habilidade lírica incomparável.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 17, name: "Alternativo" },
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
				profileImage:
					"https://i.pinimg.com/736x/3b/53/15/3b53152800cca8e43051df338e81d0c1.jpg",
				bio: "Cantora e empresária, conhecida por sua versatilidade musical e estilo marcante.",
				favoriteGenres: [
					{ id: 1, name: "Pop" },
					{ id: 4, name: "R&B" },
					{ id: 13, name: "Reggae" },
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
				profileImage:
					"https://i.pinimg.com/736x/34/c1/2f/34c12f83386aa7ac38642b282c8ffb73.jpg",
				bio: "Artista canadense que mistura rap e R&B, conhecido por hits globais e versatilidade.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 4, name: "R&B" },
					{ id: 1, name: "Pop" },
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
				profileImage:
					"https://i.pinimg.com/originals/f0/43/44/f04344ef6c6630552d5fb64acf1cb7eb.jpg",
				bio: "Rapper e personalidade da mídia, conhecida por sua autenticidade e hits contagiantes.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 19, name: "Trap" },
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
				profileImage:
					"https://i.pinimg.com/736x/9c/37/f5/9c37f52a210cb0918e3fe72c18dda975.jpg",
				bio: "Rapper e produtor conhecido por seu som psicodélico e performances imersivas. Criador do álbum 'Astroworld' e do recente 'Utopia'.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 19, name: "Trap" },
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
				profileImage:
					"https://i.pinimg.com/736x/27/ee/88/27ee88438e2e272184937dc60701030c.jpg",
				bio: "Rapper e poeta lírico, vencedor do Prêmio Pulitzer. Conhecido por álbuns como 'DAMN.' e 'To Pimp a Butterfly'.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 10, name: "Jazz" },
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
				profileImage:
					"https://i.pinimg.com/originals/8d/15/eb/8d15ebe67c010e2f4cad779a6a3b7061.jpg",
				bio: "Rapper e cantora com estilo ousado e versátil. Conhecida por hits como 'Super Bass' e 'Anaconda'.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 1, name: "Pop" },
				],
				likedUsers: [10],
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
				profileImage:
					"https://i.pinimg.com/736x/1e/55/48/1e55489bba76259577f4ebf4d0728969.jpg",
				bio: "Cantor e rapper conhecido por misturar hip hop com rock e pop. Famoso por 'Rockstar' e 'Circles'.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 1, name: "Pop" },
					{ id: 2, name: "Rock" },
				],
				likedUsers: [11],
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
				profileImage:
					"https://i.pinimg.com/736x/96/27/b1/9627b1e3b0e8bca42f6b6fbb1be7551d.jpg",
				bio: "Cantora e rapper conhecida por sua criatividade e presença nas redes sociais. Sucessos incluem 'Say So' e 'Woman'.",
				favoriteGenres: [
					{ id: 3, name: "Hip Hop" },
					{ id: 1, name: "Pop" },
					{ id: 4, name: "R&B" },
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
				profileImage:
					"https://i.pinimg.com/236x/3d/b4/32/3db4323fe2b9bbb244e2a1b9ca03c569.jpg",
				bio: "Rapper e produtor conhecido por suas letras introspectivas e álbuns como '2014 Forest Hills Drive'.",
				favoriteGenres: [{ id: 3, name: "Hip Hop" }],
				likedUsers: [],
				location: {
					latitude: 35.7796,
					longitude: -78.6382,
					address: "Fayetteville, NC, EUA",
				},
			},
			{
				id: 14,
				name: "Luana Silva",
				username: "luana.silva",
				password: "1",
				profileImage: "https://i.scdn.co/image/ab67616d0000b273e63ee0af2aef200a2f9c66ff",
				bio: "Apaixonada por noites estreladas no Guaíba e poesia sombria. Sempre com rock alternativo ou metal nos fones.",
				favoriteGenres: [
					{ id: 2, name: "Rock" },
					{ id: 17, name: "Alternativo" },
					{ id: 15, name: "Metal" },
				],
				likedUsers: [],
				location: {
					latitude: -30.0346,
					longitude: -51.2177,
					address: "Porto Alegre, Rio Grande do Sul, Brasil",
				},
			},
			{
				id: 15,
				name: "Rafaela Costa",
				username: "rafa.costa",
				password: "1",
				profileImage:
					"https://i.pinimg.com/236x/5f/15/89/5f158939292f19fd926641129852b316.jpg",
				bio: "Surfista nas praias de Floripa e fã de música eletrônica. Bora fazer um som?",
				favoriteGenres: [
					{ id: 5, name: "Eletrônica" },
					{ id: 20, name: "EDM" },
					{ id: 21, name: "House" },
				],
				likedUsers: [16],
				location: {
					latitude: -27.5949,
					longitude: -48.5482,
					address: "Florianópolis, Santa Catarina, Brasil",
				},
			},
			{
				id: 16,
				name: "Camila Oliveira",
				username: "camila.oli",
				password: "1",
				profileImage:
					"https://i.pinimg.com/736x/43/29/ef/4329ef3cc8360e8f768879321f65b83d.jpg",
				bio: "Apaixonada por chocolate quente e o frio de Gramado. Pagode e samba são minha vibe!",
				favoriteGenres: [
					{ id: 8, name: "Pagode" },
					{ id: 9, name: "Samba" },
					{ id: 1, name: "Pop" },
				],
				likedUsers: [],
				location: {
					latitude: -29.1685,
					longitude: -51.1791,
					address: "Gramado, Rio Grande do Sul, Brasil",
				},
			},
			{
				id: 17,
				name: "Carlos Silva",
				username: "carlos.silva",
				password: "1",
				profileImage:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
				bio: "Curitibano que ama um rock e um café quente. Sempre explorando os parques da cidade!",
				favoriteGenres: [
					{ id: 2, name: "Rock" },
					{ id: 16, name: "Indie" },
					{ id: 17, name: "Alternativo" },
				],
				likedUsers: [15],
				location: {
					latitude: -25.4284,
					longitude: -49.2733,
					address: "Curitiba, Paraná, Brasil",
				},
			},
			{
				id: 18,
				name: "Isabela Ferreira",
				username: "isa.ferreira",
				password: "1",
				profileImage:
					"https://i.pinimg.com/736x/be/1e/cc/be1ecc1171b73ec6abda280c0a5075a2.jpg",
				bio: "Encantada pelas Cataratas do Iguaçu e apaixonada por MPB. Vamos curtir um som?",
				favoriteGenres: [
					{ id: 30, name: "MPB" },
					{ id: 4, name: "R&B" },
					{ id: 9, name: "Samba" },
				],
				likedUsers: [],
				location: {
					latitude: -25.6953,
					longitude: -54.4367,
					address: "Foz do Iguaçu, Paraná, Brasil",
				},
			},
			{
				id: 19,
				name: "Thiago Santos",
				username: "thiago.santos",
				password: "1",
				profileImage:
					"https://images.unsplash.com/photo-1519085360753-afccb0a1f906?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
				bio: "Carioca nato, vivo entre o samba do Cacique de Ramos e o funk das favelas.",
				favoriteGenres: [
					{ id: 7, name: "Funk" },
					{ id: 9, name: "Samba" },
					{ id: 3, name: "Hip Hop" },
				],
				likedUsers: [20],
				location: {
					latitude: -22.9068,
					longitude: -43.1729,
					address: "Rio de Janeiro, Rio de Janeiro, Brasil",
				},
			},
			{
				id: 20,
				name: "Fernanda Lima",
				username: "fe.lima",
				password: "1",
				profileImage:
					"https://cdn.shopify.com/s/files/1/0250/3698/0323/files/purple-e-girl-hair-with-bangs_600x600.jpg?v=1677641077",
				bio: "Paulistana que ama a energia da Avenida Paulista e um bom pop internacional.",
				favoriteGenres: [
					{ id: 1, name: "Pop" },
					{ id: 18, name: "K-Pop" },
					{ id: 19, name: "Trap" },
				],
				likedUsers: [],
				location: {
					latitude: -23.5505,
					longitude: -46.6333,
					address: "São Paulo, São Paulo, Brasil",
				},
			},
			{
				id: 21,
				name: "João Pereira",
				username: "joao.pereira",
				password: "1",
				profileImage:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
				bio: "Baiano apaixonado por axé e forró, sempre dançando nas ruas de Salvador!",
				favoriteGenres: [
					{ id: 26, name: "Afrobeats" },
					{ id: 9, name: "Samba" },
					{ id: 7, name: "Funk" },
				],
				likedUsers: [19],
				location: {
					latitude: -12.9714,
					longitude: -38.5014,
					address: "Salvador, Bahia, Brasil",
				},
			},
			{
				id: 22,
				name: "Larissa Souza",
				username: "lari.souza",
				password: "1",
				profileImage:
					"https://i0.wp.com/alittlebithuman.com/wp-content/uploads/2021/07/CORPSE-E-GIRLS-ARE-RUINING-MY-LIFE-LYRICS.jpg?fit=741%2C443&ssl=1",
				bio: "Recifense que vive para o frevo e o maracatu. Música nordestina no coração!",
				favoriteGenres: [
					{ id: 30, name: "MPB" },
					{ id: 13, name: "Reggae" },
					{ id: 1, name: "Pop" },
				],
				likedUsers: [],
				location: {
					latitude: -8.0476,
					longitude: -34.877,
					address: "Recife, Pernambuco, Brasil",
				},
			},
			{
				id: 23,
				name: "Gabriel Mendes",
				username: "gabi.mendes",
				password: "1",
				profileImage:
					"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
				bio: "Fortalezense que curte um forró e as praias do Ceará. Vamos curtir um luau?",
				favoriteGenres: [
					{ id: 6, name: "Sertanejo" },
					{ id: 7, name: "Funk" },
					{ id: 24, name: "Reggaeton" },
				],
				likedUsers: [22],
				location: {
					latitude: -3.7172,
					longitude: -38.5433,
					address: "Fortaleza, Ceará, Brasil",
				},
			},
			{
				id: 24,
				name: "Ana Clara Ribeiro",
				username: "ana.clara",
				password: "1",
				profileImage:
					"https://biowikis.com/wp-content/uploads/2022/03/Emma-Langevin.jpg",
				bio: "Amazônica apaixonada pela natureza e pela música reggae de Manaus.",
				favoriteGenres: [
					{ id: 13, name: "Reggae" },
					{ id: 30, name: "MPB" },
					{ id: 26, name: "Afrobeats" },
				],
				likedUsers: [],
				location: {
					latitude: -3.119,
					longitude: -60.0217,
					address: "Manaus, Amazonas, Brasil",
				},
			},
			{
				id: 25,
				name: "Lucas Ferreira",
				username: "lucas.fer",
				password: "1",
				profileImage:
					"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
				bio: "Brasiliense que curte o rock nacional e a arquitetura única da capital.",
				favoriteGenres: [
					{ id: 2, name: "Rock" },
					{ id: 16, name: "Indie" },
					{ id: 30, name: "MPB" },
				],
				likedUsers: [24],
				location: {
					latitude: -15.8267,
					longitude: -47.9218,
					address: "Brasília, Distrito Federal, Brasil",
				},
			},
			{
				id: 26,
				name: "Mariana Dias",
				username: "mari.dias",
				password: "1",
				profileImage:
					"https://i.pinimg.com/736x/d5/04/03/d504032716e80f414b5a3a33a6ba8e73.jpg",
				bio: "Mineira que ama pão de queijo e sertanejo. BH é meu lugar no mundo!",
				favoriteGenres: [
					{ id: 6, name: "Sertanejo" },
					{ id: 1, name: "Pop" },
					{ id: 4, name: "R&B" },
				],
				likedUsers: [],
				location: {
					latitude: -19.9191,
					longitude: -43.9386,
					address: "Belo Horizonte, Minas Gerais, Brasil",
				},
			},
			{
				id: 27,
				name: "Pedro Lima",
				username: "pedro.lima",
				password: "1",
				profileImage:
					"https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
				bio: "Paraense que vive o ritmo do carimbó e o calor de Belém.",
				favoriteGenres: [
					{ id: 9, name: "Samba" },
					{ id: 13, name: "Reggae" },
					{ id: 30, name: "MPB" },
				],
				likedUsers: [26],
				location: {
					latitude: -1.4558,
					longitude: -48.4902,
					address: "Belém, Pará, Brasil",
				},
			},
			{
				id: 28,
				name: "Beatriz Cunha",
				username: "bia.cunha",
				password: "1",
				profileImage:
					"https://i.pinimg.com/736x/78/ee/e6/78eee68c32eba8f173839b3fb6219ee2.jpg",
				bio: "Vivendo o paraíso em Fernando de Noronha e dançando ao som de reggae e pop.",
				favoriteGenres: [
					{ id: 13, name: "Reggae" },
					{ id: 1, name: "Pop" },
					{ id: 24, name: "Reggaeton" },
				],
				likedUsers: [],
				location: {
					latitude: -3.854,
					longitude: -32.4297,
					address: "Fernando de Noronha, Pernambuco, Brasil",
				},
			},
			{
				id: 29,
				name: "Billie Eilish",
				username: "billie.eilish",
				password: "1",
				profileImage: "https://pbs.twimg.com/media/FZJO-9MWYAA1tBX.jpg",
				bio: "Cantora com vibes sombrias e letras introspectivas. Fã de noites escuras e sons alternativos.",
				favoriteGenres: [
					{ id: 1, name: "Pop" },
					{ id: 17, name: "Alternativo" },
					{ id: 16, name: "Indie" },
				],
				likedUsers: [],
				location: {
					latitude: 34.0522,
					longitude: -118.2437,
					address: "Los Angeles, CA, EUA",
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
