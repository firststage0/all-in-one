<script setup>
import Lesson from "@/components/Lesson.vue";
import lessons from "@/data/lessons.json";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import GoBackButton from "@/components/GoBackButton.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CourseAdminPanel from "@/components/CourseAdminPanel.vue";
import { fetcher } from "@/functions/fetcher";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
const $route = useRoute();

const buttonId = ref(null || 1);
const courseData = ref({});
const lessonData = ref({});

const courseId = Number($route.query.courseId);
const topicId = Number($route.query.topicId);
const lessonId = Number($route.query.lessonId);

const lessonUrl = `https://dev.aiostudy.com/api/v1/courses/get-lesson?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}&TopicID=${topicId}&LessonID=${lessonId}`;
const url = `https://aiostudy.com/api/v1/courses/get-own-courses?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const getData = (url) => {
  return fetcher(url).then((data) => {
    return data;
  });
};

onMounted(() => {
  buttonId.value = Number($route.query.buttonId || 1);
  const promise = getData(url);
  promise.then((data) => {
    for (const element of data.Courses) {
      if (element.UniqueID === courseId) {
        courseData.value = element;
      }
    }
    isLoading.value = false;
  });

  const promise2 = getData(lessonUrl);
  promise2.then((data) => {
    lessonData.value = data.Lesson;
  });
});
</script>

<template>
  <HeaderComponent />
  <perfect-scrollbar id="app">
    <div class="lesson-page">
      <div class="lesson-page-wrapper">
        <Breadcrumbs />
        <CourceCard :data="courseData" />
        <div class="nav">
          <SlideNavBar :courseId="courseId" v-model="buttonId" />
          <CourseAdminPanel :isOnEdit="true" :isPaused="false" />
        </div>
        <router-link
          :to="{ path: '/education', query: { buttonId: 1, id: courseId } }"
          class="router-link"
          ><GoBackButton />
        </router-link>

        <Lesson :data="lessons[0]" :isAdmin="true" />
      </div>
    </div>
  </perfect-scrollbar>
</template>

<style scoped>
.lesson-page {
  margin-top: calc(var(--header-height) + 26px);
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
  height: fit-content;
  justify-content: space-between;
}

.lesson-page-wrapper {
  /* margin-top: calc(var(--header-height) + 26px); */
  margin-bottom: 42px;
  width: 1440px;
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
