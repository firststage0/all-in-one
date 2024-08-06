<script setup>
import { onMounted } from "vue";
import getData from "@/functions/getDataFromServer";
import jsonData from "@/functions/getDataFromServer";

const url = "https://aiostudy.com/api/v1/courses/get-course?CourseID=3";

onMounted(async () => {
  await getData(url);
  console.log("App mounted");
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
