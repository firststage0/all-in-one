<script setup>
import { ref, onMounted } from "vue";
import TextField from "@/components/TextField.vue";
import HelpButton from "@/components/HelpButton.vue";

const props = defineProps({ data: Object });
const status = ref("");

onMounted(() => {
  switch (props.data.status) {
    case "waiting":
      status.value = "Ждем вашего ответа";
      break;
    case "checking":
      status.value = "Проверяется преподавателем";
      break;
    case "checked":
      status.value = "Проверено преподавателем";
      break;
  }
});
</script>

<template>
  <div class="homework">
    <header class="header">
      <div class="header-top">
        <p class="header-title">{{ props.data.title }}</p>
        <p class="status">{{ status }}</p>
      </div>
      <div class="header-theme">
        <p class="theme">{{ props.data.theme }}</p>
      </div>
    </header>
    <main class="main">
      <p class="main-title">Описание</p>
      <div class="divider"></div>
      <p class="task-title">Задание от преподавателя</p>
      <p v-for="(el, index) in props.data.tasks" class="task-text">
        {{ props.data.tasks[index] }}
      </p>
      <TextField class="text-field" />
      <HelpButton />
    </main>
  </div>
</template>

<style scoped>
.homework {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 24px;
}

.status {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.header-theme {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
}

.theme {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border-radius: 32px;
  padding: 16px;
  background: #151514;
}

.main-title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 24px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.12);
}

.task-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}

.task-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

.text-field {
  width: 100%;
  margin-top: 16px;
}
</style>
