<script setup>
const buttonId = defineModel();

const toogleNavButton = (id) => {
  buttonId.value = id;
};
</script>

<template>
  <nav class="nav-bar">
    <router-link
      class="router-link"
      :to="{ path: '/education', query: { buttonId: 1 } }"
    >
      <button
        :class="`nav-button ${buttonId === 1 ? 'active' : ''}`"
        @click="toogleNavButton(1)"
      >
        Обучение
      </button></router-link
    >
    <router-link
      class="router-link"
      :to="{ path: '/education', query: { buttonId: 2 } }"
    >
      <button
        :class="`nav-button ${buttonId === 2 ? 'active' : ''}`"
        @click="toogleNavButton(2)"
      >
        Домашние работы
      </button>
    </router-link>
    <router-link
      class="router-link"
      :to="{ path: '/education', query: { buttonId: 3 } }"
    >
      <button
        :class="`nav-button ${buttonId === 3 ? 'active' : ''}`"
        @click="toogleNavButton(3)"
      >
        Достижения
      </button>
    </router-link>
  </nav>
</template>

<style scoped>
.nav-bar {
  width: fit-content;
  height: 51px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  gap: 4px;
  padding: 4px;
  background-color: #171717;
}

.nav-button {
  transition: 500ms;
  width: 240px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: inherit;
  padding: 6px 12px;
  color: #b9b9b9;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
}

.nav-button.active {
  transition: 500ms;
  background-color: #2870dd29;
  color: #2870dd;
}
</style>
