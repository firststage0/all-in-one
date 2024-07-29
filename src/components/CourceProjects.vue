<script setup>
import { defineProps } from "vue";
import "../assets/styles.css";
const props = defineProps(["languageName", "projects"]);
</script>

<template>
  <p class="title">Проекты, сделанные на {{ props.languageName }}</p>
  <ul>
    <li class="item">
      <img src="../assets/icons/projects-icon/ethereum.png" alt="" />
      <p>{{ props.projects[0] }}</p>
    </li>
    <li class="item">
      <img src="../assets/icons/projects-icon/uniswap.png" alt="" />
      <p>{{ props.projects[1] }}</p>
    </li>
    <li class="item">
      <img src="../assets/icons/projects-icon/cryptokitties.png" alt="" />
      <p>{{ props.projects[2] }}</p>
    </li>
    <li class="item">
      <img src="../assets/icons/projects-icon/augur.png" alt="" />
      <p>{{ props.projects[3] }}</p>
    </li>
  </ul>
</template>

<style scoped>
.title {
  margin-top: 32px;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
}

ul {
  margin-top: 8px;
  padding: 0;
  display: flex;
  list-style-type: none;
  gap: 12px;
}

.item {
  display: flex;
  align-items: center;
  background-color: #161613;
  padding: 12px;
  border-radius: 12px;
  gap: 10px;
}
</style>
