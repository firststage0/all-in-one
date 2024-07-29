<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainContent from "./components/MainContent.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <MainContent />
  </main>
</template>

<style scoped>
main {
  margin: auto auto;
  width: 1440px;
}
</style>
