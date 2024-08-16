<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import homeworks from "@/data/homeworks.json";
import GoBackButton from "@/components/GoBackButton.vue";
import Homework from "@/components/Homework.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { fetcher } from "@/functions/fetcher";
const $route = useRoute();

const buttonId = ref(null || 1);
const courseId = Number($route.query.id);
const courseData = ref({});
const isLoading = ref(false);

const courseUrl = `https://aiostudy.com/api/v1/courses/get-own-courses?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

onMounted(() => {
  buttonId.value = Number($route.query.buttonId || 1);
  const promise = fetcher(courseUrl);
  isLoading.value = true;
  promise.then((data) => {
    for (const element of data.Courses) {
      if (element.UniqueID === courseId) {
        courseData.value = element;
      }
    }
    isLoading.value = false;
  });
});
</script>

<template>
  <HeaderComponent />
  <PerfectScrollbar id="app">
    <div class="homework-page">
      <div class="homework-page-wrapper">
        <CourceCard v-if="!isLoading" :data="courseData" />
        <SlideNavBar :courseId="courseId" v-model="buttonId" />
        <router-link
          :to="{
            path: '/education',
            query: { buttonId: buttonId, id: courseId },
          }"
          class="router-link"
          ><GoBackButton />
        </router-link>
        <Homework :data="homeworks[$route.params.id - 1]" :isAdmin="true" />
      </div>
    </div>
  </PerfectScrollbar>
</template>

<style scoped>
.homework-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.homework-page-wrapper {
  margin-top: calc(var(--header-height) + 16px);
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1440px;
}
</style>
