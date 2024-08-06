<script setup>
import GoBackButton from "@/components/GoBackButton.vue";
import NextPrevNavigation from "@/components/NextPrevNavigation.vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { onMounted } from "vue";
import "@/assets/plyr-custom.css";

onMounted(() => {
  const player = new Plyr("#player");
});
</script>

<template>
  <div class="lesson-page">
    <header class="lesson-header">
      <GoBackButton />
      <div class="header-top">
        <p class="lessons-count">
          <span>1</span> / 11 <span> Вводный курс студента</span>
        </p>
        <NextPrevNavigation />
      </div>
      <div class="header-bottom">
        <div class="theme-block">
          <p class="theme">Тема 1. Циклы и Массивы</p>
        </div>
        <div class="progress-bar">
          <div
            v-for="i in 11"
            :class="`progress-cell ${i === 1 ? 'current' : ''}`"
          ></div>
        </div>
      </div>
    </header>
    <div class="lesson-wrapper">
      <div class="player">
        <video
          id="player"
          playsinline
          controls
          poster="https://atuin.ru/demo/plyr/poster.jpg"
        >
          <source src="https://atuin.ru/demo/plyr/1280.mp4" type="video/mp4" />
        </video>
      </div>
      <p class="description-title">Описание</p>
      <div class="divider"></div>
      <div class="description-text">
        Добро пожаловать в AIO Study! <br />
        В этом курсе мы расскажем про обучение на платформе <br /><br />
        <b>Теперь к курсу. О чём этот урок:</b> <br />
        Мария Максимова, руководитель кураторов студентов в AIO Study,
        расскажет, как работает сайт, а также познакомит с содержанием и целями
        курса. Вы получите ответы на вопросы:
        <br /><br />
        <ul>
          <li>Какие разделы есть на сайте и чем они нам полезны?</li>
          <li>Как устроен отдел обучения? Какие есть вкладки?</li>
          <li>Как устроено расписание в разделе «Обучение»?</li>
          <li>Как зайти в личный кабинет?</li>
          <li>Как найти курс или урок?</li>
        </ul>
      </div>
      <div class="divider"></div>
      <footer class="lesson-footer"><NextPrevNavigation /></footer>
    </div>
  </div>
</template>

<style scoped>
.lesson-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lesson-header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
}

.lessons-count {
  font-family: var(--inter-font);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  white-space: pre;
}

.lessons-count > span {
  font-weight: 600;
  font-size: 24px;
  text-align: center;
}

.header-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
}

.theme-block {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 4px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
}

.progress-bar {
  display: flex;
  gap: 8px;
}

.progress-cell {
  border-radius: 6px;
  width: 102px;
  height: 6px;
  background: rgba(255, 255, 255, 0.04);
}

.progress-cell.current {
  background: rgba(255, 255, 255, 0.64);
}

.progress-cell.completed {
  background: rgba(50, 180, 19, 0.64);
}

.lesson-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 32px;
  padding: 16px;
  background: #151514;
}

.player {
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
}

.description-title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 24px;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
}

.lesson-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
