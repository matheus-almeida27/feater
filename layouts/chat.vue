<template>
    <v-app>
        <v-main class="d-flex flex-column">
            <slot />
        </v-main>
    </v-app>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
    v-main {
        height: 100vh;
    }
</style>
