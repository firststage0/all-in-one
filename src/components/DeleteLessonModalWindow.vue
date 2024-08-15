<script setup>
import { toogleWindowStatus } from "@/functions/modalWindowsStatus";
import { fetchPost } from "@/functions/fetcher";
const props = defineProps({
  data: Object,
  lessonId: Number,
  courseId: Number,
  topicId: Number,
});

console.log(props.data);

const url = `https://dev.aiostudy.com/api/v1/courses/update-lessons?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const body = {
  UserToken: String(import.meta.env.VITE_APP_ADMIN_TOKEN),
  Course: {
    UniqueID: props.courseId,
    TopicID: props.topicId,
    LessonsIDsToDel: [props.lessonId],
    LessonsToAdd: [],
    LessonsToUpdate: [],
  },
};

const deleteLesson = () => {
  console.log(body);
  fetchPost(url, body).then(() => {
    props.getLessons();
    toogleWindowStatus("deleteLesson");
  });
};
</script>

<template>
  <div class="modal-window" @click.self="toogleWindowStatus('deleteLesson')">
    <div class="wrapper">
      <header class="header">
        <p class="header-title">Удаление урока</p>
        <button class="close" @click.stop="toogleWindowStatus('deleteLesson')">
          <img src="@/assets/icons/close-icon.svg" alt="" />
        </button>
      </header>
      <main class="main">
        <p class="question">Вы действительно хотите удалить?</p>
        <p class="title">Урок</p>
        <p class="description">{{ props.data.Name }}</p>
      </main>
      <footer class="footer">
        <button @click="toogleWindowStatus('deleteLesson')" class="left">
          Отменить
        </button>
        <button @click="deleteLesson" class="right">Да</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.32);
}

.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  width: 400px;

  background: #232427;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 17px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.header-title {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 24px;
}

.close {
  border: none;
  background: inherit;
}

.close > img {
  filter: contrast(0.5);
}

.main {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
}

.question {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
}

.description {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 16px;
}

.title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.footer {
  background: #2d2e32;
  width: 100%;
  height: 64px;
  border-radius: 0 0 16px 16px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.left,
.right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  border-radius: 12px;
  padding: 12px 16px;
  width: 140px;
  height: 43px;
}

.left {
  border: 1px solid #2870dd;
  font-size: var(--inter-font);
  font-weight: bold;
  font-size: 16px;
  color: #2870dd;
  background: inherit;
}

.right {
  border: none;
  background: linear-gradient(90deg, #2870dd 0%, #255cea 100%);
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 16px;
}
</style>
