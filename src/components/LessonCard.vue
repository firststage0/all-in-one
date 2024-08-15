<script setup>
import EditPanel from "@/components/EditPanel.vue";
import EditLessonModalWindow from "@/components/EditLessonModalWindow.vue";
import { isWindowActive } from "@/functions/modalWindowsStatus";
import { useRouter } from "vue-router";
import DeleteLessonModalWindow from "@/components/DeleteLessonModalWindow.vue";
const props = defineProps({
  data: Object,
  isOnEdit: Boolean,
  topicId: Number,
  courseId: Number,
  lessonId: Number,
});

const router = useRouter();

const navigate = (elementId) => {
  console.log("navigate", elementId);

  router.push({ path: `/lesson/${elementId}`, query: { buttonId: 1 } });
};

const editLesson = () => {
  isWindowActive["editLesson"].status = true;
  console.log(props.data);
};

const deleteLesson = () => {
  isWindowActive["deleteLesson"].status = true;
};
</script>

<template>
  <EditLessonModalWindow
    :lessonId="props.lessonId"
    :courseId="props.courseId"
    :topicId="props.topicId"
    :data="props.data"
    v-if="isWindowActive['editLesson'].status"
  />
  <DeleteLessonModalWindow
    :data="props.data"
    :courseId="props.courseId"
    :lessonId="props.lessonId"
    :topicId="props.topicId"
    v-if="isWindowActive['deleteLesson'].status"
  />
  <div
    :class="`card ${props.data.isCompleted ? 'inactive' : ''}`"
    @click="navigate(props.data.UniqueID)"
  >
    <main class="card-main">
      <div class="header">
        <div class="left">
          <img
            src="@/assets/icons/type-icons/video.svg"
            alt=""
            class="type-img"
          />
          <p class="type-title">{{ props.data.Type }}</p>
        </div>
        <div class="right">
          <EditPanel
            v-if="props.isOnEdit"
            :editFuncition="editLesson"
            :deleteFunction="deleteLesson"
          />
        </div>
      </div>

      <p class="card-title">{{ props.data.Name }}</p>
    </main>
    <footer class="card-footer">
      <div class="duration-block">
        <img src="@/assets/icons/duration.svg" alt="" class="duration-img" />
        <p class="duration">Длительность</p>
        <p class="duration-value">{{ props.data.Duration + " мин" }}</p>
      </div>
      <button
        :class="`go-to-button ${props.data.isCompleted ? 'inactive' : ''}`"
      >
        <p :class="`go-to-text ${props.data.isCompleted ? 'inactive' : ''}`">
          {{ props.data.isCompleted ? "Урок пройден" : "Перейти к уроку" }}
        </p>
      </button>
    </footer>
  </div>
</template>

<style scoped>
.card {
  transition: 400ms;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  background: #26272b;
  cursor: pointer;
}

.card:not(.inactive):hover {
  transition: 400ms;
  background: #1f2022;
}

.card.inactive {
  pointer-events: none;
  background: rgba(31, 32, 34, 0.64);
}

.card-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  gap: 8px;
}

.right {
  position: relative;
  z-index: 10;
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
</style>
