<script setup>
import "@/assets/styles.css";
import { onMounted, ref } from "vue";

import flagRussia from "@/assets/icons/flag-russia.svg";
import flagAmerica from "@/assets/icons/flag-america.svg";

import {
  toogleWindowStatus,
  isWindowActive,
} from "@/functions/profileModalWindow";

const isThemeDark = ref(true);
const toogleTheme = () => {
  isThemeDark.value = !isThemeDark.value;
};

const setHeaderHeight = (height) => {
  const root = document.documentElement;
  root.style.setProperty("--header-height", `${height}px`);
};

onMounted(() => {
  const header = document.querySelector(".container").offsetHeight;
  setHeaderHeight(header);
});

const activeLanguage = ref("ru");

const dropDownShow = ref(false);

const languages = {
  ru: { name: "RU", url: flagRussia },
  en: { name: "EN", url: flagAmerica },
};

const logStatus = () => {
  console.log(isWindowActive.status);
};
</script>

<template>
  <header>
    <div class="container">
      <div class="title">
        <h1 class="primary-title">All-IN-ONE</h1>
        <h2 class="secondary-title">Study</h2>
      </div>
      <nav class="nav-bar">
        <ul>
          <li class="item">
            <button class="referral" @click="toogleWindowStatus">
              Referal
              <img
                class="referral-image"
                src="../assets/icons/referral.svg"
                alt="percent-image"
              />
            </button>
          </li>
          <li class="item">
            <button @click="logStatus">
              <img
                class="profile-image"
                src="../assets/icons/profile-image.png"
                alt="profile-image"
              />
              0x831B49F
              <img
                src="../assets/icons/copy-image.svg"
                alt=""
                class="copy-image"
              />
            </button>
          </li>
          <li class="item">
            <button @click="toogleTheme">
              <div class="toogle-theme-field">
                <div
                  :class="`${
                    isThemeDark ? 'toogle-theme-dark' : 'toogle-theme-light'
                  }`"
                ></div>
              </div>
            </button>
          </li>
          <li class="item">
            <button>
              <img
                src="../assets/icons/chat-icon.svg"
                alt=""
                class="chat-img"
              />
            </button>
          </li>
          <li class="item">
            <button style="gap: 10px">
              <img
                class="question-mark-img"
                src="../assets/icons/question-mark.svg"
                alt=""
              />
              FAQ
            </button>
          </li>
          <li class="item">
            <button style="gap: 4px" @click="dropDownShow = true">
              <img :src="languages[activeLanguage].url" alt="" class="flag" />
              {{ languages[activeLanguage].name }}
            </button>
            <div v-if="dropDownShow" class="dropdown-box">
              <button
                v-for="(el, index) in languages"
                class="dropdown-item"
                @click="
                  activeLanguage = index;
                  dropDownShow = false;
                "
              >
                <img :src="el.url" alt="" class="flag" />
                {{ el.name }}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #0f0f0c;
  width: 100%;
  color: #ffff;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.primary-title {
  font-weight: 700;
  font-size: 19px;
  font-family: var(--kinetica-font);
}

.secondary-title {
  font-weight: 300;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.32);
  font-family: var(--kinetica-font);
}

ul {
  display: flex;
  list-style-type: none;
  margin-right: 16px;
  gap: 8px;
}

button {
  /* color: #ffff; */
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #0f0f0c;
  height: 48px;
  width: fit-content;
  border: 1px solid #ffffff29;
  border-radius: 14px;
  padding: 10px 12px;
}

.referral {
  background: linear-gradient(225deg, #bdff00 0%, #edff7b 100%);
  color: #000000;
  padding: 14px 20px;
}

.flag {
  width: 24px;
  height: 24px;
}

.dropdown-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 70px;
  right: 10px;
  width: fit-content;
  background-color: #1e1e18;
  border: 1px solid #ffffff29;
  border-radius: 14px;
  padding: 10px 12px;
  z-index: 10;
}

.dropdown-item {
  transition: all 300ms;
  border: 1px solid #24222229;
  background-color: #0f0f0c;
  border-radius: 14px;
  padding: 10px 12px;
}

.dropdown-item:hover {
  border: 1px solid #286ce0;
}

.toogle-theme-field {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 360px;
  width: 55px;
  height: 28px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.15);

  background: #2a2b2e;
}

.toogle-theme-dark {
  position: absolute;
  right: 0;
  transition: all 1s ease-out;
  width: 28px;
  height: 28px;
  background-image: url("@/assets/icons/button-icons/dark-theme-icon.svg");
}

.toogle-theme-light {
  position: absolute;
  left: 0;
  transition: all 1s ease-out;
  width: 28px;
  height: 28px;
  background-image: url("@/assets/icons/button-icons/light-theme-icon.svg");
}

@keyframes move-left {
  0% {
    left: 0;
  }
  100% {
    left: 50%;
  }
}

@keyframes move-right {
  0% {
    right: 0;
  }
  100% {
    right: 50%;
  }
}
</style>
