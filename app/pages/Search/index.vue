<template>
  <h1>Search Page</h1>
  <SearchBar @search="searchPkm" />
  <div>
    <ItemCard v-if="pkm" :item="pkm" />
    <FavButton :item="pkm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ItemCard from "../../shared/components/ItemCard.vue";
import SearchBar from "./components/SearchBar.vue";
import FavButton from "./components/FavButton.vue";

const pkm = ref(null);

const searchPkm = async (pokemon) => {
  try {
    const response = await $fetch("/api/search/" + pokemon);
    pkm.value = response;
  } catch (e) {
    console.log(e);
    pkm.value = null;
  }
};
</script>
