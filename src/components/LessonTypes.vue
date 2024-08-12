<script setup></script>

<template>
  <div class="button-block">
    <button class="main-button"><p>Видеокурс</p></button>
    <button class="main-button active"><p>Вебинарный формат</p></button>
    <button class="main-button"><p>Домашка</p></button>
  </div>
</template>

<style scoped>
.button-block {
  display: flex;
  gap: 8px;
}

.main-button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  border-radius: 12px;
  padding: 16px 22px;
  background: rgba(255, 255, 255, 0.04);
  flex: 1 1 auto;
}

.main-button > p {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 14px;
}

.main-button.active {
  position: relative;
}

.main-button.active > p {
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main-button.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  padding: 1px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  background-clip: padding-box;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
