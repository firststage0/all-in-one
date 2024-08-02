<script setup>
import FutureAchievements from "@/components/FutureAchievements.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainContent from "@/components/MainContent.vue";
import WhatLearn from "@/components/WhatLearn.vue";
import CourceProgram from "@/components/CourceProgram.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { isWindowActive } from "@/functions/profileModalWindow";

import "@/assets/styles.css";

import { ref, computed, watch } from "vue";

import { fetcher } from "@/functions/fetcher";
import ProfileModalWindow from "./components/ProfileModalWindow.vue";
import RefferalModalWindow from "./components/RefferalModalWindow.vue";
import ConnectedReferalModalWindow from "./components/ConnectedReferalModalWindow.vue";

const jsonData = ref({});
const isLoading = ref(false);

const url = "https://aiostudy.com/api/v1/courses/get-course?CourseID=3";

const getData = async () => {
  const promise = fetcher(url);
  isLoading.value = true;
  promise.then((data) => {
    jsonData.value = data.Course;
    isLoading.value = false;
  });
};

const activeWindow = ref(false);

activeWindow.value = computed(() => {
  return isWindowActive.status;
});

watch(activeWindow.value, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
});

onload = () => {
  getData();
};
</script>

<template v-if="!isLoading" class="template">
  <header class="header">
    <HeaderComponent class="header" />
  </header>
  <main class="main">
    <ProfileModalWindow v-if="activeWindow.value" />
    <!-- <RefferalModalWindow /> -->
    <!-- <ConnectedReferalModalWindow /> -->

    <div class="container"><MainContent :data="jsonData" /></div>

    <div class="container"><WhatLearn /></div>
    <div class="container">
      <FutureAchievements :achievements="jsonData?.Achievements" />
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
</template>

<style scoped>
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

header {
  top: 0;
  position: fixed;
  z-index: 3;
}
</style>
