<script setup>
import { ref, onMounted } from "vue";
import TextField from "@/components/TextField.vue";
import HelpButton from "@/components/HelpButton.vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "@/assets/plyr-custom.css";
import Test from "@/components/Test.vue";
const props = defineProps({ data: Object });
const status = ref("");

onMounted(() => {
  switch (props.data.status) {
    case "waiting":
      status.value = "Ждем вашего ответа";
      break;
    case "checking":
      status.value = "Проверяется преподавателем";
      break;
    case "checked":
      status.value = "Проверено преподавателем";
      break;
  }
  const player = new Plyr("#player");
});
</script>

<template>
  <div class="homework">
    <header class="header">
      <div class="header-top">
        <p class="header-title">{{ props.data.title }}</p>
        <p class="status">{{ status }}</p>
      </div>
      <div class="header-theme">
        <p class="theme">{{ props.data.theme }}</p>
      </div>
    </header>
    <main class="main">
      <p class="main-title">Описание</p>
      <div class="divider"></div>
      <p class="task-title">Задание от преподавателя</p>
      <p v-for="(el, index) in props.data.tasks" class="task-text">
        {{ props.data.tasks[index] }}
      </p>
      <Test
        :data="props.data?.test"
        :isTestCompleted="props.data.isTestCompleted"
      />
      <div v-show="status === 'Проверено преподавателем'" class="teacher-block">
        <p class="time">Ср, 14 окт., 22:01 MSK (UTC+3)</p>
        <div class="teacher-info">
          <p class="teacher-info-title">Преподаватель</p>
          <p class="name">Иван Иванов</p>
        </div>
        <p class="teacher-comment">Привет! Всё круто! Молодец!</p>
        <div class="player">
          <video
            v-if="props.data.videoUrl"
            id="player"
            playsinline
            controls
            poster="https://atuin.ru/demo/plyr/poster.jpg"
          >
            <source :src="props.data.videoUrl" type="video/mp4" />
          </video>
        </div>
        <div class="divider"></div>
        <div class="mark-block">
          <p class="mark-text">Оценка:</p>
          <p class="mark-value green">Отлично</p>
        </div>
      </div>
      <TextField class="text-field" :isFiles="true" :ifTime="true" />
      <HelpButton />
    </main>
  </div>
</template>

<style scoped>
.homework {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 24px;
}

.status {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.header-theme {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
}

.theme {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border-radius: 32px;
  padding: 16px;
  background: #151514;
}

.main-title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 24px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.12);
}

.task-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}

.task-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

.teacher-block {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  background: rgba(40, 112, 221, 0.08);
}

.time {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.32);
}

.teacher-info-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.teacher-name {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.teacher-comment {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
}

.player {
  width: 40%;
}

.mark-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 4px;
}

.mark-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.mark-value {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
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

.text-field {
  width: 100%;
  margin-top: 16px;
}
</style>
