<template>
  <ul v-if="item" :class="{ disable: item.name === '' }">
    <li>{{ item.name }}</li>
    <li>{{ item.order === 0 ? "" : `Nº Pokédex: ${item.order}` }}</li>
    <li>{{ item.height === 0 ? "" : `Altura: ${item.height}` }}</li>
    <li>{{ item.weight === 0 ? "" : `Pes: ${item.weight}` }}</li>
    <li>
      <button
        v-if="item && item.name"
        class="heart-btn"
        @click="changeStatusPkm(item)"
      >
        <i
          class="pi"
          :class="{ 'pi-heart': !isFav, 'pi-heart-fill': isFav }"
        ></i>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { usePkmStore } from "@/stores/pkmStore";
const { item } = defineProps({ item: Object });

const favPkm = usePkmStore();
const isFav = computed(() => favPkm.isFavorite(item.order));

async function changeStatusPkm(pkm) {
  if (!favPkm.isFavorite(pkm.order)) await favPkm.addPkm(pkm);
  else await favPkm.removePkm(pkm.order);
}
</script>

<style scoped>
.disable {
  list-style: none;
}

.heart-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  font-size: 1.4rem;
}
</style>
