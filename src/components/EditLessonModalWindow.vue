<script setup>
import { toogleWindowStatus } from "@/functions/modalWindowsStatus";
import LessonTypes from "@/components/LessonTypes.vue";
import { onMounted, ref, watch } from "vue";
import { fetcher, fetchPost } from "@/functions/fetcher";
import TipTap from "@/components/TipTap.vue";
const props = defineProps({
  uniqueID: Number,
  courseId: Number,
  topicId: Number,
  lessonId: Number,
  getLessons: Function,
});

const jsonData = ref({});

const url = `https://dev.aiostudy.com/api/v1/courses/get-lesson?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}&TopicID=${props.topicId}&LessonID=${props.lessonId}`;

const isLoading = ref(false);

onMounted(() => {
  isLoading.value = true;
  fetcher(url).then((data) => {
    jsonData.value = data.Lesson;
    isLoading.value = false;
  });
});

const urlUpdate = `https://dev.aiostudy.com/api/v1/courses/update-lessons?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const buttonId = ref(null);

const name = ref(null);
const duration = ref(null);
const type = ref(null);
const description = ref(null);

watch(jsonData, () => {
  name.value = jsonData.value.Name;
  duration.value = jsonData.value.Duration;
  type.value = jsonData.value.Type;
  description.value = jsonData.value.Description;
  console.log(description.value);
});

const setType = () => {
  switch (type.value) {
    case "Видеокурс": {
      buttonId.value = 0;
      break;
    }
    case "Вебинарный формат": {
      buttonId.value = 1;
      break;
    }
    case "Домашка": {
      buttonId.value = 2;
      break;
    }
  }
};

const body = {
  UserToken: "847ffb17-e4f1-4a5f-a2f5-a503fb1f2bc6",
  Course: {
    UniqueID: 3,
    TopicID: 2,
    LessonsIDsToDel: [],
    LessonsToAdd: [],
    LessonsToUpdate: [
      {
        UniqueID: props.uniqueID,
        Name: name.value,
        Duration: duration.value,
        Type: type.value,
        Description: "",
        VideoBase64: null,
        DocumentsToDel: [],
        DocumentsToAdd: [],
      },
    ],
  },
};

setType();

watch(type, () => {
  setType();
});

watch([name, duration, type, description], () => {
  body.Course.LessonsToUpdate[0].Name = name.value ? name.value : null;
  body.Course.LessonsToUpdate[0].Duration = duration.value
    ? duration.value
    : null;
  body.Course.LessonsToUpdate[0].Type = type.value;
  body.Course.LessonsToUpdate[0].Description = description.value
    ? description.value
    : null;
});

const editLesson = () => {
  fetchPost(urlUpdate, body).then(() => {
    props.getLessons();
    toogleWindowStatus("editLesson");
  });
};
</script>

<template>
  <div
    v-if="!isLoading"
    class="modal-window"
    @click.self="toogleWindowStatus('editLesson')"
  >
    <div class="wrapper">
      <header class="header">
        <p class="header-title">Редактирование урока</p>
        <button class="close" @click.stop="toogleWindowStatus('editLesson')">
          <img src="@/assets/icons/close-icon.svg" alt="" />
        </button>
      </header>
      <main class="main">
        <div class="main-block">
          <p class="title">Название</p>
          <input
            v-model="name"
            class="input"
            type="text"
            placeholder="Введите название урока"
          />
        </div>
        <div class="main-block">
          <p class="title">Тип урока</p>
          <LessonTypes v-model="type" :buttonId="buttonId" />
          <div class="main-block">
            <p class="title">Длительность</p>
            <div class="input-block">
              <input
                v-model="duration"
                type="text"
                class="duration-input"
                placeholder="20"
              />
              <p class="duration-text">мин</p>
            </div>
            <div class="editor"><TipTap v-model="description" /></div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <button @click="toogleWindowStatus('editLesson')" class="left">
          Отменить
        </button>
        <button @click="editLesson" class="right">Сохранить</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
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
  width: 496px;
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

.main-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  justify-content: flex-start;
}

.title {
  font-family: var(--inter-semibold-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.input {
  border: none;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 16px;
  background: #2a2b2e;
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 16px;
}

.input::placeholder {
  font-family: var(--inter-semibold-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.input-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.duration-input {
  border-radius: 12px;
  padding: 12px 16px;
  width: 64px;
  height: 48px;
  background: #2a2b2e;
  border: none;
}

.duration-input::placeholder {
  font-family: var(--inter-semibold-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.duration-text {
  font-family: var(--inter-semibold-font);
  font-weight: 500;
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

.editor {
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 16px;
}
</style>
