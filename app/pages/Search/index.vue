<template>
  <SearchBar @search="searchPkm" />
  <div>
    <ItemCard :item="pkm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "./components/SearchBar.vue";
import ItemCard from "./components/ItemCard.vue";

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
