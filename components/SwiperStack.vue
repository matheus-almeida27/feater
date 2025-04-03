<template>
	<div class="card-stack">
		<div class="w-100 d-flex justify-center">{{ swipeResult?.direction || "Nenhum swipe ainda" }}</div>
		<div
			v-for="(card, index) in cards"
			:key="card.id"
			class="card"
			:class="{ 'card-active': index === 0 }"
			:style="{ backgroundColor: card.color }"
			@mousedown="startDrag($event, index)"
			@touchstart="startDrag($event, index)">
			{{ card.name }}
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits(["swipe"]);
const cards = ref([
	{ id: 1, name: "User 44", color: "rgb(206, 17, 17)" },
	{ id: 2, name: "User 1", color: "rgb(0, 140, 255)" },
	{ id: 4, name: "User 12", color: "rgb(10, 184, 111)" },
	{ id: 5, name: "User 51", color: "rgb(10, 184, 111)" },
	{ id: 6, name: "User 12", color: "rgb(10, 184, 111)" },
	{ id: 7, name: "User 2352", color: "rgb(10, 184, 111)" },
	{ id: 8, name: "User 1123", color: "rgb(10, 184, 111)" },
	{ id: 9, name: "User 234324", color: "rgb(10, 184, 111)" },
	{ id: 34, name: "", color: "" },
]);

let startX = 0;
let currentX = 0;
let isDragging = false;
let draggedCard = null;
const swipeResult = ref();

function startDrag(event, index) {
	if (index !== 0) return; // Só o card da frente pode ser arrastado
	draggedCard = event.target;
	isDragging = true;
	startX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;

	document.addEventListener("mousemove", onDrag);
	document.addEventListener("touchmove", onDrag);
	document.addEventListener("mouseup", endDrag);
	document.addEventListener("touchend", endDrag);
}

function onDrag(event) {
	if (!isDragging) return;
	currentX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
	const dx = currentX - startX;
	draggedCard.style.transform = `translateX(${dx}px) rotate(${dx / 10}deg)`;
	draggedCard.style.opacity = 1 - Math.abs(dx) / 300; // Fade out
}

function endDrag() {
	if (!isDragging) return;
	isDragging = false;
	const dx = currentX - startX;

	if (Math.abs(dx) > 100) {
		const direction = dx > 0 ? "→" : "←";
		const swipedCard = cards.value[0];
		swipeResult.value = { direction, card: swipedCard };
		emit("swipe", swipeResult.value); // Emite o resultado

		draggedCard.style.transition = "transform 0.3s, opacity 0.3s";
		draggedCard.style.transform = `translateX(${dx > 0 ? 500 : -500}px)`;
		draggedCard.style.opacity = 0;

		setTimeout(() => {
			cards.value.shift();
		}, 200);
	} else {
		draggedCard.style.transition = "transform 0.3s, opacity 0.3s";
		draggedCard.style.transform = "translateX(0)";
		draggedCard.style.opacity = 1;
	}

	document.removeEventListener("mousemove", onDrag);
	document.removeEventListener("touchmove", onDrag);
	document.removeEventListener("mouseup", endDrag);
	document.removeEventListener("touchend", endDrag);
}
</script>

<style>
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
	width: 240px;
	height: 320px;
	margin: 0 auto;
}

.card {
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	font-weight: bold;
	color: #fff;
	transition: transform 0.3s, opacity 0.3s;
}

.card-active {
	z-index: 10;
	cursor: grab;
}

.card:not(.card-active) {
	background: linear-gradient(135deg, #170829 0%, #2f0f49 100%);
	transform: scale(0.95) translateY(10px);
	z-index: 5;
}
</style>
