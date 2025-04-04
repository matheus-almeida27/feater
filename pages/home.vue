<template>
	<v-container
		fluid
		class="fill-height">
		<v-row
			align="center"
			justify="center">
			<v-col
				cols="12"
				sm="8"
				md="6"
				lg="4">
				<SwiperStack />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "default",
	});
</script>

<style></style>
