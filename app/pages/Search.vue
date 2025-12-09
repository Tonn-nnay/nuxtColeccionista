<template>
  <input type="text" v-model="searchText" placeholder="Escriu el nom del pokèmon..." />
  <button @click="searchPkm">Busca</button>
  <div>
    <ItemCard :item="pkm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { getPkm } from '@/services/communicationManager'
// import ItemCard from '@/components/ItemCard.vue'

const searchText = ref('')
const pkm = ref({
  id: 0,
  name: '',
  order: 0,
  height: 0,
  weight: 0,
})

async function searchPkm() {
  pkm.value = await getPkm(searchText.value)
  console.log(pkm.value)
}
</script>
