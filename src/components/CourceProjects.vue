<script setup>
import "@/assets/styles.css";
const props = defineProps(["textForProjects", "projects"]);
</script>

<template>
  <p class="title">{{ props?.textForProjects }}</p>
  <ul>
    <li class="item" v-for="project in props.projects" :key="project">
      <img class="image" :src="project?.PicUrl" alt="" />
      <p>{{ project?.Name }}</p>
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

.image {
  width: 42px;
  height: 42px;
  object-fit: cover;
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
