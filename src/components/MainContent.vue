<script setup>
import "@/assets/styles.css";
import CourceTitle from "@/components/CourceTitle.vue";
import CourceDescription from "@/components/CourceDescription.vue";
import CourceProjects from "@/components/CourceProjects.vue";
import CourceInfo from "@/components/CourceInfo.vue";
import CourceBottom from "@/components/CourceBottom.vue";
import { ref } from "vue";

const props = defineProps(["data"]);
const isLoading = ref(false);

if (!props.data?.SocialsWhereBuy) {
  isLoading.value = true;
} else {
  isLoading.value = false;
}
</script>

<template>
  <div class="container">
    <div class="main-content">
      <router-link to="/" class="router-link">
        <button class="back-to-cources">
          <img
            class="arrow"
            src="@/assets\icons\button-icons\arrow.svg"
            alt=""
          />
          Назад к курсам
        </button>
      </router-link>
      <div class="title">
        <CourceTitle :title="props.data?.Name" />
        <div class="discription">
          <CourceDescription :description="props.data?.smallDescription" />
        </div>
      </div>
      <div class="projects">
        <CourceProjects
          :textForProjects="props.data?.TextForProjects"
          :projects="props.data?.Projects"
        />
      </div>
      <div class="cource-info">
        <CourceInfo
          :duration="data?.Duration"
          :startDate="data?.StartDate"
          :price="data?.Price"
        />
      </div>
      <div class="main-content-bottom">
        <CourceBottom
          v-if="!isLoading"
          :socialsWhereBuy="props.data.SocialsWhereBuy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 64px;
  margin-bottom: 64px;
  width: 100%;
}

.title {
  display: flex;
  flex-direction: column;
}

.discription {
  margin-top: 12px;
}

.main-content {
  max-width: 53%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.back-to-cources {
  width: fit-content;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 13px;
  background-color: inherit;
  border: none;
  color: var(--dark-theme-color);
}

.arrow {
  width: 8px;
  height: 14px;
  color: #fff;
}
</style>
