<template>
	<v-btn
		@click="openFilters"
		variant="text"
		class="filters-btn"
		icon
		><v-icon color="#fff">mdi-tune-variant</v-icon>
	</v-btn>
	<div class="card-stack w-100">
		<v-dialog
			v-model="matchDialog"
			fullscreen
			persistent>
			<MatchDialogContent
				v-if="matchDialog"
				:match-info
				@close="onCloseMatch" />
		</v-dialog>
		<v-dialog
			v-model="filtersDialog"
			persistent
			content-class="d-flex justify-center align-center">
			<FiltersDialogContent
				@save=""
				@close="onCloseFilters" />
		</v-dialog>
		<v-scale-transition hide-on-leave>
			<div
				v-if="!cards.length"
				class="text-center justify-center align-center d-flex">
				<v-btn
					class="ma-2"
					size="120"
					variant="tonal"
					icon
					color="purple-darken-4"
					@click="resetCardsStack()"
					>Resetar <br />Stack</v-btn
				>
			</div>
		</v-scale-transition>
		<div
			class="card"
			v-for="(card, index) in cards"
			:key="card.id"
			@mousedown="startDrag($event, index)"
			@touchstart="startDrag($event, index)"
			:class="{ 'card-active': index === 0 }">
			<v-dialog-transition>
				<InnerCardStack
					id="innerCardRef"
					@click="toggleBio()"
					v-if="index === 0"
					:card
					:show-bio />
			</v-dialog-transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { User } from "~/types/types.global";

const emit = defineEmits(["swipe"]);

const staticStore = useStaticStore();
const authStore = useAuthStore();
const chatsStore = useChatsStore();
const users = ref(staticStore.users);
const showBio = ref(false);

const cards = ref([...users.value.filter((user) => user.id !== authStore?.user?.id)]);

const matchDialog = ref(false);
const filtersDialog = ref(false);
let startX = 0;
let currentX = 0;
let isDragging = false;
let draggedCard = ref();
const matchInfo = ref();

const swipeResult = ref();

const toggleBio = () => {
	showBio.value = !showBio.value;
};

function startDrag(event: any, index: any) {
	if (index !== 0) return; // Só o card da frente pode ser arrastado
	draggedCard.value = document.querySelector("#innerCardRef");
	isDragging = true;
	startX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
	currentX = startX;

	document.addEventListener("mousemove", onDrag);
	document.addEventListener("touchmove", onDrag);
	document.addEventListener("mouseup", endDrag);
	document.addEventListener("touchend", endDrag);
}

function onDrag(event: any) {
	if (!isDragging) return;
	currentX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
	const dx = currentX - startX;
	draggedCard.value.style.transform = `translateX(${dx}px) rotate(${dx / 10}deg)`;
	draggedCard.value.style.opacity = 1 - Math.abs(dx) / 300; // Fade out
}

function endDrag() {
	if (!isDragging) return;
	isDragging = false;
	const dx = currentX - startX;

	if (Math.abs(dx) > 20 && currentX != startX) {
		// Só processa se o movimento for significativo
		if (Math.abs(dx) > 100) {
			const direction = dx > 0 ? "R" : "L";
			showBio.value = false; // Fecha a bio se estiver aberta
			const swipedCard: User = cards.value[0];
			swipeResult.value = { direction, card: swipedCard };
			if (direction == "R") {
				authStore.addLikedUser(swipedCard.id);
			} else {
				authStore.rmvLikedUser(swipedCard.id);
			}

			draggedCard.value.style.transition = "transform 0.3s, opacity 0.3s";
			draggedCard.value.style.transform = `translateX(${dx > 0 ? 500 : -500}px)`;
			draggedCard.value.style.opacity = 0;

			setTimeout(() => {
				cards.value.shift();
				showBio.value = false; // Fecha a bio se estiver aberta
				if (direction == "R") {
					checkMatch(swipedCard);
				}
			}, 200);
		} else {
			// Movimento pequeno: volta ao lugar
			draggedCard.value.style.transition = "transform 0.3s, opacity 0.3s";
			draggedCard.value.style.transform = "translateX(0)";
			draggedCard.value.style.opacity = 1;
		}
	} else {
		// Clique simples (dx < 20): não faz nada
		draggedCard.value.style.transition = "transform 0.3s, opacity 0.3s";
		draggedCard.value.style.transform = "translateX(0)";
		draggedCard.value.style.opacity = 1;
	}

	document.removeEventListener("mousemove", onDrag);
	document.removeEventListener("touchmove", onDrag);
	document.removeEventListener("mouseup", endDrag);
	document.removeEventListener("touchend", endDrag);
}

function resetCardsStack() {
	cards.value = [...users.value.filter((user) => user.id !== authStore?.user?.id)];
}

const checkMatch = (swipedCard: User) => {
	// Lógica para verificar se houve match
	matchInfo.value = swipedCard;
	chatsStore.createChat(swipedCard);
	matchDialog.value = true;
	return;
	const swipedUser = users.value.find((user) => user.id === swipedCard.id);
	if (swipedUser?.likedUsers.includes(Number(authStore?.user?.id))) {
		// Lógica para o match
		alert("You both liked each other!");
	}
};

const openFilters = () => {
	filtersDialog.value = true;
};

const onCloseFilters = () => {
	filtersDialog.value = false;
};

const onCloseMatch = () => {
	matchDialog.value = false;
	matchInfo.value = null;
};
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

.card-stack {
	position: relative;
	// width: 240px;
	height: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
}

.card {
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	font-weight: bold;
	color: #fff;
	transition: transform 0s, opacity 0.5s;
}

.card-active {
	z-index: 10;
	cursor: grab;
}

.card:not(.card-active) {
	z-index: 5;
}
.filters-btn {
	position: fixed;
	z-index: 99999 !important;
	right: 4px;
	top: 4px;
	margin-top: 10px;
	margin-right: 10px;
}
</style>
