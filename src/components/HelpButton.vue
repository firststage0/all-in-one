<script setup></script>

<template>
  <button class="help">
    <img src="@/assets/icons/question-mark.svg" alt="" />
    <p>Нужна помощь с заданием</p>
  </button>
</template>

<style scoped>
.help {
  border: none;
  width: 148px;
  height: 96px;
  position: absolute;
  top: calc(50% + 300px);
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  padding: 12px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.help > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}
</style>
