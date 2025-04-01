<template>
	<v-app>
		<slot />
		<v-layout
			class="overflow-visible"
			style="height: 56px">
			<v-bottom-navigation
				mandatory
				@update:model-value="onClick"
				v-model="value"
				color="purple"
				grow>
				<v-btn :active="false">
					<v-icon size="30">mdi-chat</v-icon>
				</v-btn>

				<v-btn
					rounded
					:active="false">
					<v-img
						width="30"
						contain
						:class="{ leaf: true, off: value != 1 }"
						src="../public/feater.png"></v-img>
				</v-btn>

				<v-btn
					rounded
					:active="false">
					<v-icon size="30">mdi-account</v-icon>
				</v-btn>
			</v-bottom-navigation>
		</v-layout>
	</v-app>
</template>

<script lang="ts" setup>
	const value = ref(1);

	const onClick = (value: any) => {
		// 0 => MESSAGES
		// 1 => FEATS / HOME
		// 2 => PROFILE

		switch (value) {
			case 0:
				navigateTo("/messages");
				break;

			case 1:
				navigateTo("/home");
				break;

			case 2:
				navigateTo("/profile");
				break;

			default:
				break;
		}
	};
</script>

<style scoped lang="scss">
	.leaf {
		&.off {
			filter: grayscale(80%);
		}
	}
</style>
