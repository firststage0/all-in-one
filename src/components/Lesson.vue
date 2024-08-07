<script setup>
import GoBackButton from "@/components/GoBackButton.vue";
import NextPrevNavigation from "@/components/NextPrevNavigation.vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { onMounted, ref, watch } from "vue";
import "@/assets/plyr-custom.css";

const props = defineProps({
  data: Object,
});

const pagesStack = ref([]);

const currentPage = ref(1);
const maxPage = ref(props.data.pages.length);

watch(currentPage, () => {
  if (!pagesStack.value.includes(currentPage.value)) {
    pagesStack.value.push(currentPage.value - 1);
  }
  if (
    currentPage.value === maxPage.value &&
    !pagesStack.value.includes(currentPage.value)
  ) {
    pagesStack.value.push(currentPage.value);
  }
});

console.log();

onMounted(() => {
  const player = new Plyr("#player");
});
</script>

<template>
  <div class="lesson-page">
    <header class="lesson-header">
      <div class="header-top">
        <p class="lessons-count">
          <span>{{ currentPage }}</span> / {{ maxPage }}
          <span> {{ " " + props.data.pages[currentPage - 1].title }}</span>
        </p>
        <NextPrevNavigation v-model="currentPage" :maxPage="maxPage" />
      </div>
      <div class="header-bottom">
        <div class="theme-block">
          <p class="theme">{{ props.data.theme }}</p>
        </div>
        <div class="progress-bar">
          <div
            v-for="i in maxPage"
            :class="`progress-cell ${
              i === currentPage
                ? 'current'
                : pagesStack.includes(i)
                ? 'completed'
                : ''
            }`"
          ></div>
        </div>
      </div>
    </header>
    <div class="lesson-wrapper">
      <div v-if="props.data.pages[currentPage - 1].videoUrl" class="player">
        <video
          id="player"
          playsinline
          controls
          poster="https://atuin.ru/demo/plyr/poster.jpg"
        >
          <source
            :src="props.data.pages[currentPage - 1].videoUrl"
            type="video/mp4"
          />
        </video>
      </div>
      <p class="description-title">Описание</p>
      <div
        v-for="(i, index) in props.data.pages[currentPage - 1].descriptionBlock"
        class="description-block"
      >
        <div class="divider"></div>
        <p
          class="description-text"
          v-html="props.data.pages[currentPage - 1].descriptionBlock[index]"
        ></p>
      </div>
      <div
        v-if="props.data.pages[currentPage - 1].textField"
        class="input-group"
      >
        <textarea
          class="textarea"
          name="homework-answer"
          placeholder="Ваш ответ"
        ></textarea>
        <div class="input-button-group">
          <button class="add-file-button">
            <img
              src="@/assets/icons/button-icons/paperclip.svg"
              alt=""
              class="add-file"
            />
            <p>Прикрепить файл</p>
          </button>
          <button class="send-button">
            <p>Отправить</p>
          </button>
        </div>
      </div>
      <button v-if="currentPage === maxPage" class="help">
        <img src="@/assets/icons/question-mark.svg" alt="" />
        <p>Нужна помощь с заданием</p>
      </button>
      <div class="divider"></div>
      <footer class="lesson-footer">
        <NextPrevNavigation v-model="currentPage" :maxPage="maxPage" />
      </footer>
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
  width: 100%;
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

.description-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.description-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

b {
  font-weight: 700;
}

.input-group {
  width: 100%;
  position: relative;
}

.textarea {
  width: 100%;
  height: 120px;
  border: none;
  border-radius: 16px;
  resize: none;
  padding: 16px;
  background: #1f2022;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: #fff;
}

.input-button-group {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.homework-answer::placeholder {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.input-button-group > button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 8px;
  border-radius: 12px;
}

.input-button-group > button > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.add-file-button {
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.send-button {
  padding: 12px 32px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
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

.help {
  border: none;
  width: 148px;
  height: 96px;
  position: absolute;
  top: calc(50% + 300px);
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  padding: 12px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.help > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}
</style>
