<script setup>
import FutureAchievements from "./components/FutureAchievements.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainContent from "./components/MainContent.vue";
import WhatLearn from "./components/WhatLearn.vue";
import CourceProgram from "./components/CourceProgram.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { ref } from "vue";
import jsonData from "./data/data.json";
const data = ref(jsonData);
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <MainContent :data="data" />
    <WhatLearn />
    <FutureAchievements />
    <CourceProgram />
  </main>
  <footer>
    <FooterComponent
      :duration="data.duration"
      :startDate="data.startDate"
      :price="data.price"
    />
  </footer>
</template>

<style scoped>
main,
footer {
  margin: auto auto;
  width: 1440px;
}

header {
  top: 0;
  position: sticky;
  z-index: 3;
}
</style>
