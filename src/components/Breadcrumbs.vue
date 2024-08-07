<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
const $route = useRoute();

watch($route, () => {
  console.log($route).matched;
});
</script>

<template>
  <div>
    <ul class="breadcrumbs">
      <li v-for="(route, index) in $route.matched" :key="index">
        <router-link :to="route.path" class="router-link">{{
          route.meta.breadcrumbs
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
