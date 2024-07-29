<script setup>
import "../assets/styles.css";
import CourceTitle from "./CourceTitle.vue";
import jsonData from "../data/data.json";
import { ref } from "vue";
import CourceDescription from "./CourceDescription.vue";
import CourceProjects from "./CourceProjects.vue";
import CourceInfo from "./CourceInfo.vue";
import CourceBottom from "./CourceBottom.vue";
const data = ref(jsonData);
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
        <CourceTitle :title="data.title" />
      </div>
      <div class="description">
        <CourceDescription :description="data.description" />
      </div>
      <div class="projects">
        <CourceProjects
          :languageName="data.languageName"
          :projects="data.projects"
        />
      </div>
      <div class="cource-info">
        <CourceInfo
          :duration="data.duration"
          :startDate="data.startDate"
          :price="data.price"
        />
      </div>
      <div class="main-content-bottom">
        <CourceBottom />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 64px;
  margin-bottom: 64px;
}

.main-content {
  max-width: 53%;
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
