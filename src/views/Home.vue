<script setup>
import { onMounted, ref } from "vue";
import globalData from "@/data/globalData.json";
import "@/assets/main.css";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import CourcesNoConnectedWallet from "@/components/CourcesNoConnectedWallet.vue";
import NoActiveCources from "@/components/NoActiveCources.vue";
import AllCources from "@/components/AllCources.vue";
import { fetcher } from "@/functions/fetcher";
import roles from "@/data/roles.json";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

const jsonData = ref({});
const url = `https://dev.aiostudy.com/api/v1/courses/get-own-courses?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const isLeftBlockActive = ref(true);

const showRightBlock = () => {
  isLeftBlockActive.value = false;
};

const showLeftBlock = () => {
  isLeftBlockActive.value = true;
};

const scenario = ref(0);

const isLoading = ref(false);

onMounted(() => {
  const promise = fetcher(url);
  isLoading.value = true;
  promise.then((data) => {
    jsonData.value = data;
    isLoading.value = false;
  });
});
</script>

<template>
  <HeaderComponent />
  <perfect-scrollbar id="app">
    <div v-if="!isLoading" class="container">
      <div class="navigation-block">
        <button class="navigation-button" @click="showLeftBlock">
          <p>Курсы</p>
        </button>
        <button class="navigation-button" @click="showRightBlock">
          <p>Моё обучение</p>
        </button>
        <div :class="`marker ${isLeftBlockActive ? 'left' : 'right'}`"></div>
      </div>

      <div v-if="!isLeftBlockActive" class="education-block">
        <router-link
          v-for="(element, index) in jsonData.Courses"
          v-if="!isLoading"
          :to="{
            path: '/education',
            query: { buttonId: 1, id: element.UniqueID },
            props: { data: jsonData.value },
          }"
          class="router-link"
        >
          <CourceCard
            @click="globalData.courseId = element.UniqueID"
            v-if="scenario === 0 && !isLoading"
            :isFooterActive="true"
            :data="element"
          />
        </router-link>

        <CourcesNoConnectedWallet v-if="scenario === 1" />

        <NoActiveCources v-if="scenario === 2" />
      </div>
      <div v-if="isLeftBlockActive">
        <AllCources :isAdmin="roles.admin" />
      </div></div
  ></perfect-scrollbar>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
  gap: 16px;
}

.navigation-block {
  width: 562px;
  height: 51px;
  display: flex;
  position: relative;
  margin-top: calc(var(--header-height) + 26px);
  gap: 4px;
  background-color: #171717;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 4px;
}

.navigation-button {
  width: 50%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  border-radius: 16px;
}

.navigation-button > p {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #b9b9b9;
}

.marked {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #2870dd;
}

.marker {
  transition: 200ms;
  position: absolute;
  width: 50%;
  height: 90%;
  background-color: #2870dd29;
  border-radius: 16px;
  top: 3px;
}

.marker.left {
  transition: 200ms;
  margin-left: 0;
}

.marker.right {
  transition: 200ms;
  margin-left: 48.7%;
}
</style>
