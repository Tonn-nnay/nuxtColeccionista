<template>
  <img :src="item.sprites.front_default || null" />
  <ul v-if="item" :class="{ disable: item.name === '' }">
    <li>{{ item.name }}</li>
    <li>{{ item.order === 0 ? "" : `Nº Pokédex: ${item.order}` }}</li>
    <li>{{ item.height === 0 ? "" : `Altura: ${item.height}` }}</li>
    <li>{{ item.weight === 0 ? "" : `Pes: ${item.weight}` }}</li>
  </ul>
</template>

<script setup>
const { item } = defineProps({ item: Object });
</script>

<style scoped>
.disable {
  list-style: none;
}
</style>
