<script setup>
import { ref, watch } from "vue";

const pagesStack = ref([]);

const currentPage = defineModel();

const props = defineProps({
  maxPage: Number,
});

watch(currentPage, () => {
  if (!pagesStack.value.includes(currentPage.value - 1)) {
    pagesStack.value.push(currentPage.value - 1);
  }
  if (
    currentPage.value === props.maxPage &&
    !pagesStack.value.includes(currentPage.value)
  ) {
    pagesStack.value.push(currentPage.value);
  }
});
</script>

<template>
  <div class="progress-bar">
    <div
      v-for="i in props.maxPage"
      :class="`progress-cell ${
        i === currentPage
          ? 'current'
          : pagesStack.includes(i)
          ? 'completed'
          : ''
      }`"
    ></div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  gap: 8px;
}

.progress-cell {
  flex: 1;
  border-radius: 6px;
  width: 102px;
  height: 6px;
  background: rgba(255, 255, 255, 0.04);
}

.progress-cell.current {
  background: rgba(255, 255, 255, 0.64);
}

.progress-cell.completed {
  background: rgba(50, 180, 19, 0.64);
}
</style>
