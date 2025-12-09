import { defineStore } from "pinia";

export const usePkmStore = defineStore("pkmns", {
  state: () => ({
    favPkmn: [],
  }),
  getters: {
    getAllFavPkm(state) {
      return state.favPkmn;
    },
  },
  actions: {
    addPkm(pkm) {
      this.favPkmn.push(pkm);
      console.log("Added Successfully", this.favPkmn);
    },
    removePkm(pkmID) {
      this.favPkmn = this.favPkmn.filter((pkm) => pkm.order != pkmID);
      console.log("Deleted Successfully");
    },
    isFavorite(numberPokedex) {
      return this.favPkmn.some((pkm) => pkm.order === numberPokedex);
    },
  },
});
