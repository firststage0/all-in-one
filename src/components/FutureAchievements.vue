<script setup></script>

<template>
  <div class="container">
    <p class="title">Будущие достижения</p>
    <div class="wrapper">
      <div>Первое взаимодействие с блокчейном</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Первое взаимодействие с блокчейном</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Первое взаимодействие с блокчейном</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
      <div>Свап на Uniswap V3</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 64px 0;
}

.title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 72px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 42px;
}

.wrapper > div {
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
</style>
