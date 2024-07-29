<script setup>
import { defineProps } from "vue";
import "../assets/styles.css";
const props = defineProps(["description"]);
</script>

<template>
  <p class="description">
    {{ props.description }}
  </p>
</template>

<style scoped>
.description {
  margin-top: 24px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #ffffffa3;
}
</style>
