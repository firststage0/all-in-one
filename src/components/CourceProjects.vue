<script setup>
import "@/assets/styles.css";
const props = defineProps(["languageName", "projects"]);
</script>

<template>
  <p class="title">Проекты, сделанные на {{ props.languageName }}</p>
  <ul>
    <li class="item" v-for="project in props.projects" :key="project">
      <img :src="project.iconUrl" alt="" />
      <p>{{ project.name }}</p>
    </li>
  </ul>
</template>

<style scoped>
.title {
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

p::first-letter {
  text-transform: uppercase;
}
</style>
