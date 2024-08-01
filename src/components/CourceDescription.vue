<script setup>
import "@/assets/styles.css";
const props = defineProps(["description"]);
</script>

<template>
  <p class="discription">
    {{ props.description }}
  </p>
</template>

<style scoped>
.discription {
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #ffffffa3;
}
</style>
