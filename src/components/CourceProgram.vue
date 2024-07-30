<script setup>
import { ref } from "vue";
const active = ref(null);
</script>

<template>
  <div class="container">
    <p class="title">Программа курса</p>
    <div class="wrapper">
      <ul>
        <li v-for="(el, index) in 9">
          <div class="element">
            <header @click="active = active === index ? null : index">
              <div class="left-content">
                <p class="element-title">
                  <span>{{ el }}.</span> Основы Python
                </p>
              </div>
              <button class="show-description">
                <img
                  :id="'i' + el"
                  class="discription-block"
                  src="../assets/icons/button-icons/show-button.svg"
                  alt="+"
                />
              </button>
            </header>
            <div
              v-if="active === index"
              class="discription-block"
              :id="'b' + el"
            >
              <p class="discription">
                Изучите один из самых востребованных и простых в освоении языков
                программирования. Сможете описывать алгоритмы для решения
                повседневных задач и работы с данными.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 64px 0;
}

.wrapper {
  margin-top: 42px;
}

.title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 72px;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.element {
  width: 100%;
  background-color: #161613;
  border-radius: 24px;
  transition: 0.2s;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.element-title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 24px;
}

span {
  margin-right: 12px;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 24px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.show-description {
  border-radius: 12px;
  padding: 8px;
  width: 40px;
  height: 40px;
  background: #ffffff0a;
  border: none;
}

.element:hover {
  background: #303030;
}

.active {
  margin-top: 20px;
  height: fit-content;
}

.discription-block {
  margin-top: 20px;
  height: fit-content;
}

.discription {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
}

.button-image {
  transition: 500ms;
}
</style>
