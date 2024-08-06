<script setup>
import { jsonData } from "@/functions/getDataFromServer";
const props = defineProps({ isCompleted: Boolean, name: String });
</script>

<template>
  <div class="achievement-card">
    <div v-if="isCompleted" class="achievement-completed">
      <p>Выполнено</p>
      <img src="@/assets/icons/achievement-completed.svg" alt="" />
    </div>
    {{ name }}
  </div>
</template>

<style scoped>
.achievement-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161613;
  padding: 32px;
  border-radius: 24px;
  max-width: 275px;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 20px;
}

.achievement-completed {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.achievement-completed > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: #32b413;
}
</style>
