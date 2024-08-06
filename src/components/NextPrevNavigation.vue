<script setup></script>

<template>
  <div class="nav-block">
    <button class="button inactive">
      <img
        src="@/assets/icons/button-icons/go-to-arrow.svg"
        alt=""
        class="button-image"
      />
      <p class="text">К предыдущему</p>
    </button>
    <button class="button">
      <p class="text">К следующему</p>
      <img
        src="@/assets/icons/button-icons/go-to-arrow.svg"
        alt=""
        class="button-image"
      />
    </button>
  </div>
</template>

<style scoped>
.nav-block {
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 10px;
}

.button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.04);
}

.button.inactive {
  pointer-events: none;
  background: rgba(255, 255, 255, 0.04);
  opacity: 0.32;
}

.text {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.button-image:first-child {
  rotate: 180deg;
}
</style>
