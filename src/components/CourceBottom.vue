<script setup>
import "../assets/styles.css";
import BuyButton from "./BuyButton.vue";
</script>

<template>
  <div class="wrapper">
    <BuyButton />
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

  gap: 24px;
}

.wrapper > * {
  display: flex;
  align-items: center;
  gap: 11px;
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
