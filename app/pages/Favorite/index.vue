<template>
  <h1>FavouritesPage</h1>
  <div id="container">
    <div v-for="pokemon in favPokemons">
      <ItemCard :item="pokemon" />
    </div>
  </div>
</template>

<script setup>
import { usePkmStore } from "@/stores/pkmStore";
import ItemCard from "~/shared/components/ItemCard.vue";
const store = usePkmStore();

const favPokemons = computed(() => store.getAllFavPkm);
</script>

<style scoped>
#container {
  display: flex;
}
</style>
