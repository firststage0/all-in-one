<script setup>
import "../assets/styles.css";
</script>

<template>
  <div class="wrapper">
    <button>Купить</button>
    <img
      class="divider"
      src="../assets\icons\projects-icon\divider.png"
      alt=""
    />
    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
      <img src="../assets/icons/telegram.svg" alt="" />
      <p>Telegram</p>
    </a>
    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
      <img src="../assets/icons/telegram.svg" alt="" />
      <p>Telegram</p>
    </a>
    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
      <img src="../assets/icons/telegram.svg" alt="" />
      <p>Telegram</p>
    </a>
    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
      <img src="../assets/icons/telegram.svg" alt="" />
      <p>Telegram</p>
    </a>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  margin-top: 32px;
  gap: 24px;
}

.wrapper > * {
  display: flex;
  align-items: center;
  gap: 11px;
}

button {
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  width: 186px;
  height: 48px;
  box-shadow: 0 2px 12px 0 rgba(157, 87, 187, 0.64);
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  font-family: var(--inter-font);
}

a {
  text-decoration: none;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
}

p {
  color: #5b5b59;
}

img {
  filter: invert(50%);
}
</style>
