<script setup>
import FutureAchievements from "@/components/FutureAchievements.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainContent from "@/components/MainContent.vue";
import WhatLearn from "@/components/WhatLearn.vue";
import CourceProgram from "@/components/CourceProgram.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { ref } from "vue";

import { fetcher } from "@/functions/fetcher";

const jsonData = ref({});

const url = "https://aiostudy.com/api/v1/courses/get-course?CourseID=3";
onload = async () => {
  const promise = fetcher(url);
  promise.then((data) => {
    jsonData.value = data;
    console.log(jsonData.value);
  });
};
</script>

<template class="template">
  <header class="header">
    <HeaderComponent />
  </header>
  <main class="main">
    <div class="container"><MainContent :data="jsonData" /></div>

    <div class="container"><WhatLearn /></div>
    <div class="container"><FutureAchievements /></div>
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

header {
  top: 0;
  position: sticky;
  z-index: 3;
}
</style>
