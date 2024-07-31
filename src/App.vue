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

<template class="template">
  <header class="header">
    <HeaderComponent />
  </header>
  <main class="main">
    <div class="container"><MainContent :data="data" /></div>
    <div class="container"><WhatLearn /></div>
    <div class="container"><FutureAchievements /></div>
    <div class="center-background"></div>
    <div class="container"><CourceProgram /></div>
  </main>
  <footer class="footer">
    <div class="container">
      <FooterComponent
        :duration="data.duration"
        :startDate="data.startDate"
        :price="data.price"
      />
    </div>
  </footer>
</template>

<style scoped>
.container {
  margin: auto auto;
  width: 1440px;
  margin-top: 64px;
}

.main {
  margin-top: 64px;
}

.footer {
  margin-top: 42px;
  margin-bottom: 64px;
}

.center-background {
  position: absolute;
  z-index: -1;
  top: 60%;
  width: 100%;
  height: 2000px;

  background-image: url(@/assets/images/half-corus.png),
    url(@/assets/images/spiral.png), url(@/assets/images/Vector2.svg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 95% 33%, 4% 77%, 0 10%;
}

header {
  top: 0;
  position: sticky;
  z-index: 3;
}
</style>
