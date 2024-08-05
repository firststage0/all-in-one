<script setup>
import CourceCard from "../components/CourceCard.vue";

import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const isMarked = ref({
  1: false,
  2: false,
  3: false,
});

const toogleButton = (id) => {
  for (const key in isMarked.value) {
    id === Number(key)
      ? (isMarked.value[key] = true)
      : (isMarked.value[key] = false);
  }
};
</script>

<template>
  <HeaderComponent />
  <div class="wrapper">
    <div class="main-container">
      <CourceCard isBackButtonShow="true" />

      <nav class="nav-bar">
        <button
          :class="`nav-button ${isMarked[1] ? 'active' : ''}`"
          @click="toogleButton(1)"
        >
          Обучение
        </button>
        <button
          :class="`nav-button ${isMarked[2] ? 'active' : ''}`"
          @click="toogleButton(2)"
        >
          Домашние работы
        </button>
        <button
          :class="`nav-button ${isMarked[3] ? 'active' : ''}`"
          @click="toogleButton(3)"
        >
          Достижения
        </button>
      </nav>
      <div class="interface">
        <div class="menu">
          <button v-for="(i, menu_index) in 8" class="menu-button">
            <p class="button-title">Тема 1</p>
            <p class="description">Циклы и массивы</p>
          </button>
        </div>
        <div v-if="isMarked[1]" class="main-content">
          <div class="card">
            <div class="type-block">
              <img src="" alt="" class="type-img" />
              <p class="type-title"></p>
            </div>
            <p class="card-title"></p>
            <footer class="card-footer">
              <div class="duration-block">
                <img src="" alt="" class="duration-img" />
                <p class="duration">Длительность</p>
                <p class="duration-value">20 мин.</p>
              </div>
              <button class="go-to-lesson">
                <p>Перейти к уроку</p>
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-container {
  margin-top: calc(var(--header-height) + 16px);
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
</style>
