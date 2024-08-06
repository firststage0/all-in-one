<script setup>
import CourceCard from "@/components/CourceCard.vue";
import themesData from "@/data/themes.json";
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import Achievements from "@/components/Achievements.vue";
import homeworks from "@/data/homeworks.json";
import HomeworkCard from "@/components/HomeworkCard.vue";
import LessonCard from "@/components/LessonCard.vue";
import LessonPage from "@/components/LessonPage.vue";

const isShowCardButton = ref(true);

const isMarked = ref({
  0: false,
  1: true,
  2: false,
  3: false,
});

const themes = ref(themesData);
const activeMenuButtonIndex = ref(null);

const toogleNavButton = (id) => {
  for (const key in isMarked.value) {
    id === Number(key)
      ? (isMarked.value[key] = true)
      : (isMarked.value[key] = false);
  }
  isShowCardButton.value = true;
};

const handleLessonsCardClick = () => {
  toogleNavButton(0);
  isShowCardButton.value = false;
};
</script>

<template>
  <HeaderComponent />
  <div class="education-wrapper">
    <div class="main-container">
      <CourceCard :isBackButtonShow="isShowCardButton" />

      <nav class="nav-bar">
        <button
          :class="`nav-button ${isMarked[1] ? 'active' : ''}`"
          @click="toogleNavButton(1)"
        >
          Обучение
        </button>
        <button
          :class="`nav-button ${isMarked[2] ? 'active' : ''}`"
          @click="toogleNavButton(2)"
        >
          Домашние работы
        </button>
        <button
          :class="`nav-button ${isMarked[3] ? 'active' : ''}`"
          @click="toogleNavButton(3)"
        >
          Достижения
        </button>
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
          <LessonCard
            @click="handleLessonsCardClick"
            v-for="element in themes[activeMenuButtonIndex].lessons"
            :data="element"
          />
        </div>
      </div>

      <div v-if="isMarked[2]" class="homework-interface">
        <div class="homework-wrapper">
          <HomeworkCard v-for="i in homeworks" :data="i" :isAdmin="false" />
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
      <div v-if="isMarked[0]" class="lesson">
        <LessonPage />
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

.nav-bar {
  width: fit-content;
  height: 51px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  gap: 4px;
  padding: 4px;
  background-color: #171717;
}

.nav-button {
  transition: 500ms;
  width: 240px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: inherit;
  padding: 6px 12px;
  color: #b9b9b9;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
}

.nav-button.active {
  transition: 500ms;
  background-color: #2870dd29;
  color: #2870dd;
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
