<script setup>
import lessons from "@/data/lessons.json";
import Lesson from "@/components/Lesson.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="lesson-page">
    <div class="wrapper">
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
  margin-top: calc(var(--header-height) + 64px);
  width: 1440px;
  height: 100%;
}
</style>
