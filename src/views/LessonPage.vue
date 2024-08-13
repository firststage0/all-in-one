<script setup>
import lessons from "@/data/lessons.json";
import Lesson from "@/components/Lesson.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import GoBackButton from "@/components/GoBackButton.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CourseAdminPanel from "@/components/CourseAdminPanel.vue";
const $route = useRoute();

const buttonId = ref(null || 1);

onMounted(() => {
  buttonId.value = Number($route.query.buttonId || 1);
});
</script>

<template>
  <HeaderComponent />
  <div class="lesson-page">
    <div class="lesson-page-wrapper">
      <Breadcrumbs />
      <CourceCard />
      <div class="nav">
        <SlideNavBar v-model="buttonId" />

        <CourseAdminPanel :isOnEdit="true" :isPaused="false" />
      </div>
      <router-link to="/education" class="router-link"
        ><GoBackButton />
      </router-link>
      <Lesson :data="lessons[$route.params.id - 1]" :isAdmin="true" />
    </div>
  </div>
</template>

<style scoped>
.lesson-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.lesson-page-wrapper {
  margin-top: calc(var(--header-height) + 16px);
  margin-bottom: 42px;
  width: 1440px;
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
