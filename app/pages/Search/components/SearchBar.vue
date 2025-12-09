<template>
  <input
    type="text"
    v-model="query"
    placeholder="Escriu el nom del pokèmon..."
  />
  <button @click="emitSearch">Busca</button>
</template>

<script setup>
const emit = defineEmits(["search"]);
const query = ref('')


const emitSearch = () => {
  emit('search', query.value)
}; // v-model al component pare
</script>
