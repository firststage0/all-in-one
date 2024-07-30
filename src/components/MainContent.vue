<script setup>
import "../assets/styles.css";
import CourceTitle from "./CourceTitle.vue";
import { ref } from "vue";
import CourceDescription from "./CourceDescription.vue";
import CourceProjects from "./CourceProjects.vue";
import CourceInfo from "./CourceInfo.vue";
import CourceBottom from "./CourceBottom.vue";
const props = defineProps(["data"]);
const data = props.data;
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
      <div class="discription">
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
  width: 100%;
  background-image: url(../assets/images/python-image.png);
  background-repeat: no-repeat;
  background-position: 100% 10%;
  background-size: 600px;
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
