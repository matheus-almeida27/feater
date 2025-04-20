import { defineStore } from "pinia";
import type { Genre, Role } from "~/types/types.global";

export const useFiltersStore = defineStore("filters", {
	state: () => ({
		nearbyUsers: true as boolean,
		genres: [] as Genre[],
		roles: [] as Role[],
	}),
	actions: {},
});
