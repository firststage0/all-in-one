<script setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import CourceCard from "@/components/CourceCard.vue";
import { fetcher } from "@/functions/fetcher";
import { onMounted, ref, watch } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import Achievements from "@/components/Achievements.vue";
import homeworks from "@/data/homeworks.json";
import HomeworkCard from "@/components/HomeworkCard.vue";
import LessonCard from "@/components/LessonCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import { useRoute } from "vue-router";
import CourseAdminPanel from "@/components/CourseAdminPanel.vue";
import {
  toogleWindowStatus,
  isWindowActive,
} from "@/functions/modalWindowsStatus";
import NewThemeModalWindow from "@/components/NewThemeModalWindow.vue";
import NewLessonModalWindow from "@/components/NewLessonModalWindow.vue";
import EditPanel from "@/components/EditPanel.vue";
import EditThemeModalWindow from "@/components/EditThemeModalWindow.vue";
import DeleteThemeModalWindow from "@/components/DeleteThemeModalWindow.vue";
import EditLessonModalWindow from "@/components/EditLessonModalWindow.vue";
import DeleteLessonModalWindow from "@/components/DeleteLessonModalWindow.vue";
const $route = useRoute();
const isMarked = ref({
  1: true,
  2: false,
  3: false,
});

const courseId = Number($route.query.id);

const isLoading = ref(false);

const url = `https://aiostudy.com/api/v1/courses/get-own-courses?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const urlTopics = `https://dev.aiostudy.com/api/v1/courses/get-topics?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}&CourseID=${courseId}`;

const urlLessons = `https://dev.aiostudy.com/api/v1/courses/get-lessons?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const topics = ref([]);
const courseData = ref({});
const lessons = ref([]);

const topicId = ref(null);
const lessonId = ref(null);

const handleEditLessonClick = (id) => {
  lessonId.value = id;
  toogleWindowStatus("editLesson");
};

const handleDeleteLessonClick = (id) => {
  lessonId.value = id;
  toogleWindowStatus("deleteLesson");
};

const handleEditTopicClick = (id) => {
  topicId.value = id;
  toogleWindowStatus("editTheme");
};

const handleDeleteTopicClick = (id) => {
  topicId.value = id;
  toogleWindowStatus("deleteTheme");
};

const getTopics = () => {
  const promise = fetcher(urlTopics);
  isLoading.value = true;
  promise.then((data) => {
    topics.value = data.Topics;
    isLoading.value = false;
  });
};

const getLessons = () => {
  if (topics.value) {
    lessons.value = [];
    for (const i of topics.value) {
      const promise = fetcher(urlLessons + `&TopicID=${i.UniqueID}`);
      isLoading.value = true;
      promise.then((data) => {
        lessons.value.push(data.Lessons);
      });
    }
  }
  console.log("Lessons ", lessons.value);
  console.log("Topics ", topics.value);
};

const buttonId = ref(null);
watch(buttonId, () => {
  for (const key in isMarked.value) {
    buttonId.value === Number(key)
      ? (isMarked.value[key] = true)
      : (isMarked.value[key] = false);
  }
});

onMounted(() => {
  buttonId.value = Number($route.query.buttonId || 1);
  const promise = fetcher(url);
  isLoading.value = true;
  promise.then((data) => {
    for (const element of data.Courses) {
      if (element.UniqueID === courseId) {
        courseData.value = element;
      }
    }
    isLoading.value = false;
  });
  getTopics();
});

watch(topics, () => {
  getLessons();
});

const activeMenuButtonIndex = ref(null);
</script>

<template>
  <HeaderComponent />

  <DeleteLessonModalWindow
    :getLessons="getLessons"
    :data="lessons[activeMenuButtonIndex][lessonId]"
    :courseId="courseId"
    :lessonId="lessons[activeMenuButtonIndex][lessonId].UniqueID"
    :topicId="topics[activeMenuButtonIndex].UniqueID"
    v-if="isWindowActive['deleteLesson'].status"
  />

  <EditLessonModalWindow
    :getLessons="getLessons"
    :courseId="courseId"
    :topicId="topics[activeMenuButtonIndex].UniqueID"
    :data="lessons[activeMenuButtonIndex][lessonId]"
    v-if="isWindowActive['editLesson'].status"
  />

  <NewThemeModalWindow
    :courseId="courseData.UniqueID"
    :getTopics="getTopics"
    v-if="isWindowActive['newTheme'].status"
  />
  <NewLessonModalWindow
    :getLessons="getLessons"
    :courseId="courseData.UniqueID"
    :topicId="topics[activeMenuButtonIndex].UniqueID"
    v-if="isWindowActive['newLesson'].status"
  />
  <EditThemeModalWindow
    :getLessons="getLessons"
    :id="topics[topicId].UniqueID"
    :title="topics[topicId].Name"
    v-if="isWindowActive['editTheme'].status"
  />
  <DeleteThemeModalWindow
    :getTopics="getTopics"
    :themeId="topicId + 1"
    :id="topics[topicId].UniqueID"
    :title="topics[topicId].Name"
    v-if="isWindowActive['deleteTheme'].status"
  />
  <perfect-scrollbar id="app">
    <div class="education-wrapper">
      <div class="main-container">
        <CourceCard :data="courseData" :isBackButtonShow="true" />
        <nav class="nav">
          <SlideNavBar :courseId="courseId" v-model="buttonId" />
          <CourseAdminPanel :isOnEdit="false" :isPaused="false" />
        </nav>
        <div v-if="isMarked[1]" class="education-interface">
          <div class="menu">
            <div class="add-theme-wrapper">
              <div class="gradient">
                <button
                  class="add-theme"
                  @click="toogleWindowStatus('newTheme')"
                >
                  <img
                    src="@/assets/icons/button-icons/add-gradient.svg"
                    alt=""
                  />
                  <p>Добавить тему</p>
                </button>
              </div>
              <div class="divider"></div>
            </div>
            <button
              v-for="(i, menu_index) in topics"
              @click.stop="
                {
                  activeMenuButtonIndex = menu_index;
                }
              "
              :class="`menu-button ${
                activeMenuButtonIndex === menu_index ? 'active' : ''
              }`"
            >
              <div class="edit-panel">
                <EditPanel
                  :id="menu_index"
                  :editFuncition="handleEditTopicClick"
                  :deleteFunction="handleDeleteTopicClick"
                />
              </div>
              <p class="button-title">{{ "Тема " + (menu_index + 1) }}</p>
              <p class="description">{{ i.Name }}</p>
            </button>
          </div>
          <div v-if="activeMenuButtonIndex !== null" class="lessons-block">
            <button class="add-lesson" @click="toogleWindowStatus('newLesson')">
              <div class="center">
                <img src="@/assets/icons/button-icons/add.svg" alt="" />
                <p>Добавить урок</p>
              </div>
            </button>
            <div
              class="lessons"
              v-for="(element, lesson_id) in lessons[activeMenuButtonIndex]"
            >
              <EditPanel
                class="edit-panel"
                :id="lesson_id"
                :editFuncition="handleEditLessonClick"
                :deleteFunction="handleDeleteLessonClick"
              />
              <LessonCard
                :getLessons="getLessons"
                :lessonId="element.UniqueID"
                :topicId="topics[activeMenuButtonIndex].UniqueID"
                :courseId="courseData.UniqueID"
                :isOnEdit="true"
                :data="element"
              />
            </div>
          </div>
        </div>
        <div v-if="isMarked[2]" class="homework-interface">
          <div class="homework-wrapper">
            <router-link
              class="router-link"
              :to="{
                path: `/homework/${element.id}`,
                query: { buttonId: 2, id: courseId },
              }"
              v-for="element in homeworks"
            >
              <HomeworkCard :data="element" :isAdmin="false" />
            </router-link>
          </div>
        </div>
        <div v-if="isMarked[3]" class="achievements-interface">
          <div class="achievements-grid">
            <Achievements
              v-for="i in 10"
              :name="
                i === 1 || i === 6
                  ? 'Первое взаимодействие с блокчейном'
                  : 'Свап на Uniswap V3'
              "
              :isCompleted="i === 1 || i === 2 ? true : false"
            />
          </div>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<style scoped>
.lessons {
  position: relative;
}

.ps__rail-y {
  top: calc(var(--header-height) + 16px);
}

.education-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-container {
  margin-top: calc(var(--header-height) + 16px);
  margin-bottom: 42px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.inactive {
  pointer-events: none;
}

.education-interface {
  display: flex;
  gap: 16px;
}

.menu {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
  border-radius: 32px;
  padding: 16px;
  background: #151514;
}

.add-theme-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.gradient {
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 296px;
  height: 48px;
  padding: 1px;
}

.add-theme {
  display: flex;
  width: 293px;
  height: 45px;
  background-color: #151514;
  border: none;
  padding: 12px 8px;
  border-radius: 16px;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.add-theme > p {
  font-weight: 700;
  font-size: 16px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.add-theme > img {
  stroke: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.menu-button {
  transition: 400ms;
  width: 296px;
  height: 78px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
  padding: 16px;
  border: none;
  background: inherit;
  position: relative;
}

.edit-panel {
  position: absolute;
  top: 10px;
  right: 5px;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
}

.menu-button.active {
  transition: 400ms;
  background: linear-gradient(90deg, #2870dd 0%, #255cea 100%);
}

.add-lesson {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  background-color: inherit;
  gap: 8px;
  border-radius: 12px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 21px;
}

.center > p {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.center > img {
  filter: contrast(0.2);
}

.lessons-block {
  width: 100%;
  height: fit-content;
  display: grid;
  background-color: #151514;
  border-radius: 32px;
  padding: 16px;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
}

.homework-wrapper {
  display: grid;
  background-color: #151514;
  grid-template-columns: 1fr 1fr;
  border-radius: 32px;
  padding: 16px;
  gap: 16px;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(136px);
  gap: 16px;
}
</style>
