<template>
  <nav>
    <NuxtLink to="/">
      <i class="pi pi-home"></i>
    </NuxtLink>
    <NuxtLink to="/search">
      <i class="pi pi-search"></i>
    </NuxtLink>
    <NuxtLink to="/favorite">
      <i class="pi pi-star"></i>
    </NuxtLink>
  </nav>
</template>

<script setup>
import "primeicons/primeicons.css";
</script>

<style scoped>
nav {
  display: flex;
  background-color: #ccc;
  padding-left: 15px;
}

i {
  font-size: 30px;
  margin: 10px 5px;
  color: #555;
}

i:hover {
  color: #333;
}
</style>
