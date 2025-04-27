<template>
	<v-snackbar
		:model-value="modelValue"
		close-on-content-click
		rounded="xl"
		:location="xs ? 'top center' : 'bottom center'"
		transition="slide-y-transition"
		color="deep-purple accent-2 d-flex justify-center"
		variant="elevated"
		@update:model-value="$emit('update:modelValue', $event)">
		<template #default>
			<span class="snack d-flex justify-center w-100">
				{{ text }}
			</span>
		</template>
	</v-snackbar>
</template>

<script setup lang="ts">
	import { useDisplay } from "vuetify";
	const { xs } = useDisplay();
	defineProps({
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
		background-color: linear-gradient(138deg, #001716 0%, #0d000c 100%) !important;
		color: #fff;
	}
</style>
