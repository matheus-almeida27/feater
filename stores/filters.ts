import { defineStore } from "pinia";
import type { Genre } from "~/types/types.global";

export const useMyFiltersStore = defineStore("filters", {
	state: () => ({
		nearbyUsers: true as boolean,
		genres: [] as Genre[],
	}),
	actions: {},
});
