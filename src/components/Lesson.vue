<script setup>
import NextPrevNavigation from "@/components/NextPrevNavigation.vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "@/assets/plyr-custom.css";
import { onMounted, ref, watch } from "vue";
import HelpButton from "@/components/HelpButton.vue";
import TextField from "@/components/TextField.vue";
import Progresbar from "@/components/Progresbar.vue";

const props = defineProps({
  data: Object,
  isAdmin: Boolean,
});

const currentPage = ref(1);
const maxPage = ref(props.data?.pages.length);

onMounted(() => {
  const player = new Plyr("#player", {
    captions: {
      active: false,
      update: true,
    },
  });
});
</script>

<template>
  <div class="lesson-page">
    <header class="lesson-header">
      <div class="header-top">
        <p class="lessons-count">
          <span>{{ currentPage }}</span> / {{ maxPage }}
          <span> {{ " " + props.data?.pages[currentPage - 1].title }}</span>
        </p>
        <NextPrevNavigation v-model="currentPage" :maxPage="maxPage" />
      </div>
      <div class="header-bottom">
        <div class="theme-block">
          <p class="theme">{{ props.data.theme }}</p>
        </div>
        <Progresbar
          v-model="currentPage"
          :maxPage="maxPage"
          :currentPage="currentPage"
        />
      </div>
    </header>
    <div class="lesson-wrapper">
      <button v-if="props.isAdmin" class="upload-video">
        <div class="center">
          <img src="@/assets/icons/button-icons/add.svg" alt="" />
          <p class="upload-video-text">Загрузить видео</p>
        </div>
      </button>
      <div
        v-if="props.data?.pages[currentPage - 1].videoUrl && !props.isAdmin"
        class="player"
      >
        <video
          id="player"
          playsinline
          controls
          poster="https://atuin.ru/demo/plyr/poster.jpg"
        >
          <source
            :src="props.data?.pages[currentPage - 1].videoUrl"
            type="video/mp4"
          />
          <track
            label="English"
            srclang="en"
            default="true,"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          />
        </video>
        <plyr-captions />
      </div>
      <p class="description-title">Описание</p>
      <div v-if="!props.isAdmin" class="not-admin">
        <div
          v-for="(i, index) in props.data?.pages[currentPage - 1]
            .descriptionBlock"
          class="description-block"
        >
          <div class="divider"></div>
          <p
            class="description-text"
            v-html="props.data?.pages[currentPage - 1].descriptionBlock[index]"
          ></p>
        </div>
        <TextField v-if="props.data?.pages[currentPage - 1].textField" />
        <HelpButton v-if="currentPage === maxPage" />
      </div>
      <div class="admin">
        <TextField />
      </div>
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

.upload-video {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: 1px dashed rgba(255, 255, 255, 0.16);
  padding: 46px;
  border-radius: 16px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.center > img {
  filter: invert(0.5);
}

.upload-video-text {
  font-family: var(--inter-semibold-font);
  font-weight: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
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

.not-admin {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.admin {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 16px;
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
