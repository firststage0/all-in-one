<script setup>
const props = defineProps({
  fileName: String,
});
</script>

<template>
  <div class="file">
    <img src="@/assets/icons/button-icons/pdf.svg" alt="" />
    <div class="file-info">
      <p class="file-name">{{ props.fileName }}</p>
      <p class="file-size">20 KB</p>
    </div>
    <button class="delete-file">
      <img src="@/assets/icons/button-icons/trash.svg" alt="" />
    </button>
  </div>
</template>

<style scoped>
.file {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 16px 16px 14px;
  background: #1f2022;
}

.file-info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
}

.file-name {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  letter-spacing: -0.01em;
}

.file-size {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: rgba(255, 255, 255, 0.32);
}

.delete-file {
  border: none;
  background-color: inherit;
  display: flex;
  width: fit-content;
  align-self: flex-start;
}
</style>
