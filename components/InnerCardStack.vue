<template>
	<div class="stack">
		{{ card.name }}
	</div>
</template>

<script lang="ts" setup>
	defineProps({
		card: {
			type: Object,
			required: true,
		},
	});
</script>

<style lang="scss" scoped>
	.stack {
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
		transition: transform 0.3s, opacity 0.3s;
		z-index: 10;
		cursor: grab;
		background: linear-gradient(135deg, #170829 0%, #2f0f49 100%);
	}
</style>
