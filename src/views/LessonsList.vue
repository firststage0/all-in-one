<script setup>
import { ref } from "vue";

import "@/assets/main.css";

import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import CourcesNoConnectedWallet from "@/components/CourcesNoConnectedWallet.vue";
import NoActiveCources from "@/components/NoActiveCources.vue";
import AllCources from "@/components/AllCources.vue";

const showRightBlock = () => {
  isMarkerLeft.value = false;
  isLeftBlockActive.value = false;
};

const showLeftBlock = () => {
  isMarkerLeft.value = true;
  isLeftBlockActive.value = true;
};

const isMarkerLeft = ref(false);
const isLeftBlockActive = ref(false);
const scenario = ref(0);
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <div class="navigation-block">
      <button class="navigation-button" @click="showLeftBlock">
        <p>Курсы</p>
      </button>
      <button class="navigation-button" @click="showRightBlock">
        <p>Моё обучение</p>
      </button>
      <div :class="`marker ${isMarkerLeft ? 'left' : 'right'}`"></div>
    </div>

    <div v-if="!isLeftBlockActive" class="education-block">
      <router-link
        :to="{ path: '/education', query: { buttonId: 1 } }"
        class="router-link"
      >
        <CourceCard v-if="scenario === 0" :isFooterActive="true" />
      </router-link>

      <CourcesNoConnectedWallet v-if="scenario === 1" />

      <NoActiveCources v-if="scenario === 2" />
    </div>
    <div v-if="isLeftBlockActive">
      <AllCources />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}

.navigation-block {
  width: 562px;
  height: 51px;
  display: flex;
  position: relative;
  margin-top: calc(var(--header-height) + 26px);
  gap: 4px;
  background-color: #171717;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 4px;
}

.navigation-button {
  width: 50%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  border-radius: 16px;
}

.navigation-button > p {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #b9b9b9;
}

.marked {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #2870dd;
}

.marker {
  transition: 200ms;
  position: absolute;
  width: 50%;
  height: 90%;
  background-color: #2870dd29;
  border-radius: 16px;
  top: 3px;
}

.marker.left {
  transition: 200ms;
  margin-left: 0;
}

.marker.right {
  transition: 200ms;
  margin-left: 48.7%;
}
</style>
