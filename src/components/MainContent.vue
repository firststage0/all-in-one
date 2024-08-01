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

console.log(props.data);
if (!props.data?.SocialsWhereBuy) {
  isLoading.value = true;
} else {
  isLoading.value = false;
  console.log(isLoading.value);
}
</script>

<template>
  <div class="container">
    <div class="main-content">
      <button class="back-to-cources">
        <img
          class="arrow"
          src="../assets\icons\main-content-icons\arrow.svg"
          alt=""
        />
        Назад к курсам
      </button>
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
  background-image: url(../assets/images/python-image.png);
  background-repeat: no-repeat;
  background-position: 100% 10%;
  background-size: 600px;
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
