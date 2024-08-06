<script setup></script>

<template>
  <button class="back-button">
    <img src="@/assets/icons/button-icons/arrow.svg" alt="" />
    <p>Назад</p>
  </button>
</template>

<style scoped>
.back-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  gap: 10px;
}

.back-button > img {
  width: 6px;
  height: 12px;
  filter: opacity(0.6);
}

.back-button > p {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
}
</style>
