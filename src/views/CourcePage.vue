<script setup>
import FutureAchievements from "@/components/FutureAchievements.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainContent from "@/components/MainContent.vue";
import WhatLearn from "@/components/WhatLearn.vue";
import CourceProgram from "@/components/CourceProgram.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import "@/assets/main.css";

import { ref } from "vue";
import { jsonData } from "@/functions/getDataFromServer";

const isLoading = ref(false);
</script>

<template>
  <HeaderComponent />
  <div class="background-container" v-if="!isLoading">
    <main class="main">
      <div class="container"><MainContent :data="jsonData" /></div>

      <div class="container"><WhatLearn /></div>
      <div class="container">
        <FutureAchievements />
      </div>
      <div class="container"><CourceProgram /></div>
    </main>
    <footer class="footer">
      <div class="container">
        <FooterComponent
          :title="jsonData?.Name"
          :duration="jsonData?.Duration"
          :startDate="jsonData?.StartDate"
          :price="jsonData?.Price"
        />
      </div>
    </footer>
  </div>
</template>

<style scoped>
.background-container {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  background-image: url(@/assets/images/top-right-background.svg),
    url(@/assets/images/half-corus.png), url(@/assets/images/center-image.png);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: calc(50% + 500px) -5%, calc(50% + 820px) 1590px,
    calc(50% - 1170px) 410px;
  padding: 1px;
}

.container {
  margin: auto auto;
  width: 1440px;
  margin-top: 64px;
}

.main {
  margin-top: calc(var(--header-height) + 64px);
}

.footer {
  margin-top: 42px;
  margin-bottom: 64px;
}
</style>
