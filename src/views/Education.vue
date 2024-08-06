<script setup>
import CourceCard from "@/components/CourceCard.vue";
import themesData from "@/data/themes.json";
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import Achievements from "@/components/Achievements.vue";
import homeworks from "@/data/homeworks.json";
import HomeworkCard from "@/components/HomeworkCard.vue";

const isMarked = ref({
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
};
</script>

<template>
  <HeaderComponent />
  <div class="education-wrapper">
    <div class="main-container">
      <CourceCard isBackButtonShow="true" />

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
          <div
            v-for="i in themes[activeMenuButtonIndex].lessons"
            :class="`card ${i.isCompleted ? 'inactive' : ''}`"
          >
            <main class="card-main">
              <div class="type-block">
                <img :src="`${i.typeIconUrl}`" alt="" class="type-img" />
                <p class="type-title">{{ i.type }}</p>
              </div>
              <p class="card-title">{{ i.title }}</p>
            </main>
            <footer class="card-footer">
              <div class="duration-block">
                <img
                  :src="`${i?.durationIconUrl}`"
                  alt=""
                  class="duration-img"
                />
                <p class="duration">Длительность</p>
                <p class="duration-value">{{ i.duration }}</p>
              </div>
              <button
                :class="`go-to-button ${i.isCompleted ? 'inactive' : ''}`"
              >
                <p :class="`go-to-text ${i.isCompleted ? 'inactive' : ''}`">
                  {{ i.isCompleted ? "Урок пройден" : "Перейти к уроку" }}
                </p>
              </button>
            </footer>
          </div>
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

.card {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  background: #1f2022;
}

.card.inactive {
  opacity: 0.64;
}

.card-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.type-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

.type-img {
  width: 20px;
  height: 20px;
  scale: 1.2;
}

.type-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
}

.card-title {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 20px;
}

.card-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.duration-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

.duration {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
  text-align: center;
}

.duration-value {
  font-weight: 400;
  font-size: 14px;
  text-align: center;
}

.go-to-button {
  border-radius: 12px;
  padding: 12px 24px;
  border: none;
  background-color: #ffffff0a;
}

.go-to-button.inactive {
  pointer-events: none;
}

.go-to-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.go-to-text.inactive {
  color: #32b413;
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
