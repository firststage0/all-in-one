<script setup>
import { toogleWindowStatus } from "../functions/profileModalWindow";
import "@/assets/styles.css";
</script>

<template>
  <div class="content"></div>
  <div class="wrapper-profile"></div>
</template>

<style scoped>
.content {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100dvh;
  z-index: 10;
  background-color: #000000;
  opacity: var(--content-opacity);
}

.wrapper-profile {
  display: flex;
  position: fixed;
  z-index: 11;
  top: 30%;
  left: 40%;
  border-radius: 16px;
  width: 326px;
  height: 316px;
  background-color: gray;
  opacity: 1;
}
</style>
