<template>
	<v-container
		fluid
		class="fill-height">
		<v-row
			align="center"
			justify="center"
			class="fill-height">
			<v-col
				cols="12"
				sm="8"
				md="6"
				lg="4"
				xl="3"
				class="fill-height justify-center align-center d-flex">
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
