<script setup>
import lessons from "@/data/lessons.json";
import Lesson from "@/components/Lesson.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import GoBackButton from "@/components/GoBackButton.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
  <HeaderComponent />
  <div class="lesson-page">
    <div class="wrapper">
      <Breadcrumbs />
      <CourceCard />
      <SlideNavBar />
      <router-link to="/education" class="router-link"
        ><GoBackButton />
      </router-link>
      <Lesson :data="lessons[$route.params.id - 1]" />
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

.wrapper {
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
