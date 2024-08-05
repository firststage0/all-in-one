<script setup>
import { ref } from "vue";

import HeaderComponent from "../components/HeaderComponent.vue";

const active = ref(null);
const activeBlock = ref(null);
</script>

<template>
  <header class="header">
    <HeaderComponent />
  </header>
  <div class="wrapper">
    <div class="faq-container">
      <p class="faq-label">FAQ</p>
      <div class="faq-content">
        <div class="faq-menu">
          <button v-for="(i, menu_index) in 5" class="menu-button" @click="">
            <a :href="`#s${menu_index}`">Основное</a>
          </button>
        </div>
        <div class="question-section">
          <div
            v-for="(i, sectionIndex) in 5"
            class="question-block"
            :id="`s${sectionIndex}`"
          >
            <p class="question-block-title">Основное</p>
            <li v-for="(el, index) in 5" class="item">
              <header
                class="item-header"
                @click="
                  {
                    active = active === index ? null : index;
                    activeBlock =
                      activeBlock === sectionIndex ? null : sectionIndex;
                  }
                "
              >
                <p class="item-title">Label</p>
                <button class="show-button">
                  <img
                    :class="`show-img ${
                      active === index && activeBlock === sectionIndex
                        ? 'active'
                        : ''
                    }`"
                    src="@/assets/icons/button-icons/faq-show-img.svg"
                    alt=""
                  />
                </button>
              </header>
              <div
                :class="`item-discription ${
                  active === index && activeBlock === sectionIndex
                    ? 'active'
                    : ''
                }`"
              >
                <p
                  :class="`item-discription-text ${
                    active === index && activeBlock === sectionIndex
                      ? 'active'
                      : ''
                  }`"
                >
                  Discription
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.faq-container {
  margin-top: calc(var(--header-height) + 46px);
  margin-bottom: 46px;
  width: fit-content;
  display: flex;
  width: 850px;
  flex-direction: column;
  gap: 26px;
}

.faq-content {
  display: flex;
  gap: 16px;
}

.faq-label {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.faq-menu {
  width: fit-content;
  height: fit-content;
  border-radius: 16px;
  padding: 4px;
  background-color: #1f2022;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  width: 280px;
  height: 43px;
  border: none;
  background-color: inherit;
  transition: 400ms;
}

.menu-button > a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: 400ms;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #b9b9b9;
  text-decoration: none;
}

.menu-button:hover {
  transition: 400ms;
  background: #2870dd29;
}

.menu-button:hover > p {
  transition: 400ms;
  font-weight: 600;
  font-size: 16px;
  color: #2870dd;
}

.question-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.question-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.question-block-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
  line-height: normal;
}

.item {
  list-style-type: none;
  border-radius: 16px;
  width: 100%;
  height: fit-content;
  background-color: #222426;
}

.item-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 15px;
  cursor: pointer;
}

.item-title {
  font-weight: 700;
  font-size: 16px;
  font-family: var(--inter-font);
}

.show-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
}

.show-img {
  transition: all 500ms ease-out;
  rotate: 0;
}

.show-img.active {
  transition: all 500ms ease-out;
  rotate: 180deg;
}

.item-discription {
  min-height: 0;
  padding: 0 0 0 12px;
  transition: all 500ms;
}

.item-discription-text {
  transition: 100ms;
  font-weight: 500;
  font-size: 0;
  font-family: var(--inter-font);
}

.item-discription.active {
  min-height: 40px;
  max-height: fit-content;
  transition: all 500ms;
  padding: 2px 12px 12px 12px;
}

.item-discription-text.active {
  transition: 100ms;
  font-size: 14px;
}
</style>
