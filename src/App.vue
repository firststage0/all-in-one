<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("App mounted");
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
