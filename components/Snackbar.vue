<template>
	<v-snackbar
		:model-value="modelValue"
		close-on-content-click
		color="deep-purple accent-2"
		@update:model-value="$emit('update:modelValue', $event)">
		{{ text }}

		<template v-slot:actions>
			<v-btn
				color="pink"
				variant="text"
				@click="$emit('update:modelValue', false)">
				<v-icon color="#fff" size="small">mdi-close</v-icon>
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script setup>
	import { defineProps, defineEmits } from "vue";

	const props = defineProps({
		modelValue: {
			type: Boolean,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	});

	const emit = defineEmits(["update:modelValue"]);
</script>
<style lang="scss" scoped>
	.snack {
		background-color: linear-gradient(138deg, #170015 0%, #0d000c 100%);
		color: #fff;
		font-size: 3rem;
	}
</style>
