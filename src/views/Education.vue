<script setup>
import CourceCard from "@/components/CourceCard.vue";
import themesData from "@/data/themes.json";
import { onMounted, ref, watch } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import Achievements from "@/components/Achievements.vue";
import homeworks from "@/data/homeworks.json";
import HomeworkCard from "@/components/HomeworkCard.vue";
import LessonCard from "@/components/LessonCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import { useRoute } from "vue-router";
import CourseAdminPanel from "@/components/CourseAdminPanel.vue";

const $route = useRoute();

const isMarked = ref({
  1: true,
  2: false,
  3: false,
});

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
});

const themes = ref(themesData);
const activeMenuButtonIndex = ref(null);
</script>

<template>
  <HeaderComponent />
  <div class="education-wrapper">
    <div class="main-container">
      <CourceCard :isBackButtonShow="true" />
      <nav class="nav">
        <SlideNavBar v-model="buttonId" />
        <CourseAdminPanel :isOnEdit="false" :isPaused="false" />
      </nav>
      <div v-if="isMarked[1]" class="education-interface">
        <div class="menu">
          <button
            v-for="(i, menu_index) in themes"
            @click="
              {
                activeMenuButtonIndex = menu_index;
              }
            "
            :class="`menu-button ${
              activeMenuButtonIndex === menu_index ? 'active' : ''
            }`"
          >
            <p class="button-title">{{ i.title }}</p>
            <p class="description">{{ i.description }}</p>
          </button>
        </div>
        <div
          v-if="
            activeMenuButtonIndex !== null &&
            themes[activeMenuButtonIndex].lessons
          "
          class="lessons-block"
        >
          <router-link
            :class="`router-link ${element.isCompleted ? 'inactive' : ''}`"
            :to="{ path: `/lesson/${element.id}`, query: { buttonId: 1 } }"
            v-for="element in themes[activeMenuButtonIndex].lessons"
          >
            <LessonCard :data="element" />
          </router-link>
        </div>
      </div>
      <div v-if="isMarked[2]" class="homework-interface">
        <div class="homework-wrapper">
          <router-link
            class="router-link"
            :to="{ path: `/homework/${element.id}`, query: { buttonId: 2 } }"
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
</template>

<style scoped>
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

.menu-button {
  transition: 400ms;
  width: 296px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
  padding: 16px;
  border: none;
  background: inherit;
}

.menu-button.active {
  transition: 400ms;
  background: linear-gradient(90deg, #2870dd 0%, #255cea 100%);
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
