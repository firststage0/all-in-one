<script setup>
import { toogleWindowStatus } from "@/functions/modalWindowsStatus";
import FileComponent from "./FileComponent.vue";
import TextField from "./TextField.vue";
import { ref } from "vue";
const activeButton = ref(0);

const marks = [
  {
    name: "Отлично",
    color: "green",
  },
  {
    name: "Хорошо",
    color: "green",
  },
  {
    name: "Пойдет",
    color: "yellow",
  },
  {
    name: "Плохо",
    color: "red",
  },
];
</script>

<template>
  <div
    class="student-homework-page"
    @click.self="toogleWindowStatus('studentHomework')"
  >
    <div class="homework-wrapper">
      <header class="header">
        <p class="header-title">Домашка студента</p>
        <button
          class="close"
          @click.stop="toogleWindowStatus('studentHomework')"
        >
          <img src="@/assets/icons/close-icon.svg" alt="" />
        </button>
      </header>
      <main class="main">
        <div class="info-block">
          <div class="student">
            <p class="gray-text">Студент</p>
            <p class="student-name">@zaivanza</p>
          </div>
          <div class="time-block">
            <p class="gray-text">Отправил работу</p>
            <p class="time">Вт, 13 окт., 22:01 MSK (UTC+3)</p>
          </div>
        </div>
        <div class="student-homework-block">
          <div class="file-block">
            <FileComponent
              v-for="(i, index) in 2"
              :key="index"
              fileName="my-cv.pdf"
            />
          </div>
          <p class="student-comment">
            Для участия в челлендже (первую копию не доделал :( , не имел
            понятия, через трансформ делается или другим способом)
            https://www.dropbox.com/s/r60qgzqpugh0tnp/4.%20%D0%A7%D0%B5%D0%?dl=0
          </p>
        </div>

        <div class="mark-block">
          <p class="gray-text">Оценка</p>
          <ul class="marks">
            <li v-for="(mark, index) in marks">
              <button
                @click="activeButton = index"
                :class="`mark ${mark.color} ${
                  activeButton === index ? 'active' : ''
                }`"
              >
                <p :class="`mark-text ${mark.color}`">{{ mark.name }}</p>
              </button>
            </li>
          </ul>
        </div>
        <TextField />
      </main>

      <footer class="footer">
        <button class="submit">
          <p class="submit-text">Подтвердить работу</p>
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.student-homework-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}

.homework-wrapper {
  width: 1036px;
  background: #232427;
  border-radius: 16px;
}

.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.close {
  background-color: inherit;
  border: none;
}

.close > img {
  filter: invert(0.4);
}

.header-title {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 24px;
}

.main {
  width: 100%;
  padding: 24px;
}

.info-block {
  display: flex;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.04);
}

.gray-text {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.student-name {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 16px;
}

.time {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.32);
}

.student-homework-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.04);
}

.file-block {
  display: flex;
  gap: 8px;
}

.mark-block {
  display: flex;
  flex-direction: column;
  padding: 24px 0 8px 0;
}

.marks {
  padding: 0;
  display: flex;
  gap: 8px;
  list-style-type: none;
}

.mark {
  transition: 300ms;
  border: 1px solid rgba(50, 180, 19, 0.08);
  border-radius: 12px;
  padding: 8px 12px;
  background: none;
  width: 96px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mark-text {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
}

.green {
  color: #32b413;
}

.yellow {
  color: #fcac34;
}

.red {
  color: #e33;
}

.footer {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  background: #2d2e32;
  border-radius: 0 0 16px 16px;
}

.submit {
  border-radius: 12px;
  padding: 12px 32px;
  width: 232px;
  height: 43px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.mark.green:hover {
  transition: 300ms;
  background-color: rgba(50, 180, 19, 0.04);
}

.mark.yellow:hover {
  transition: 300ms;
  background: rgba(252, 172, 52, 0.04);
}

.mark.red:hover {
  transition: 300ms;
  background: rgba(238, 51, 51, 0.04);
}

.mark.green.active {
  border: 1px solid #32b413;
}
.mark.yellow.active {
  border: 1px solid #fcac34;
}
.mark.red.active {
  border: 1px solid #e33;
}

.submit-text {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
</style>
