<template>
	<div class="card-stack w-100">
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
			:class="{ 'card-active': index === 0 }"
			@mousedown="startDrag($event, index)"
			@touchstart="startDrag($event, index)">
			<!-- <div class="overflow" /> -->
			<v-dialog-transition>
				<InnerCardStack
					v-if="index === 0"
					:card />
			</v-dialog-transition>
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits(["swipe"]);

	const staticStore = useStaticStore();
	const authStore = useAuthStore();
	const users = ref(staticStore.users);

	const cards = ref([...users.value.filter((user) => user.id !== authStore.user.id)]);

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

	function resetCardsStack() {
		cards.value = [...users.value.filter((user) => user.id !== authStore.user.id)];
	}
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
		transition: transform 0.5s, opacity 0.5s;
	}

	.card-active {
		z-index: 10;
		cursor: grab;
		background: linear-gradient(135deg, #170829 0%, #2f0f49 100%);
	}

	.card:not(.card-active) {
		z-index: 5;
	}
</style>
