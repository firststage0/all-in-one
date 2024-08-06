<script setup>
import Achievements from "@/components/Achievements.vue";
import { jsonData } from "@/functions/getDataFromServer";
</script>

<template>
  <div class="container">
    <p class="title">Будущие достижения</p>
    <div class="achievements-grid">
      <Achievements
        v-for="achievement in jsonData?.Achievements"
        :name="achievement.Name"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 64px 0;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 42px;
}

.title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 72px;
}
</style>
