<script setup>
import { toogleWindowStatus } from "@/functions/modalWindowsStatus";
import { ref, watch } from "vue";
import { fetchPost } from "@/functions/fetcher";
const props = defineProps({
  id: Number,
  title: String,
});

console.log(props.id, props.title);

const url = `https://dev.aiostudy.com/api/v1/courses/update-topics?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const name = ref(props.title);

const body = {
  UserToken: String(import.meta.env.VITE_APP_ADMIN_TOKEN),
  Course: {
    UniqueID: 3,
    TopicsIDsToDel: [],
    TopicsToAdd: [],
    TopicsToUpdate: [
      {
        UniqueID: String(props.id),
        Name: props.title,
      },
    ],
  },
};
watch(name, () => {
  body.Course.TopicsToUpdate[0].Name = name.value;
});

const editTheme = () => {
  fetchPost(url, body).then(() => {
    toogleWindowStatus("editTheme");
  });
};
</script>

<template>
  <div class="modal-window" @click.self="toogleWindowStatus('editTheme')">
    <div class="wrapper">
      <header class="header">
        <p class="header-title">Редактирование темы</p>
        <button class="close" @click.stop="toogleWindowStatus('editTheme')">
          <img src="@/assets/icons/close-icon.svg" alt="" />
        </button>
      </header>
      <main class="main">
        <p class="title">Название</p>
        <input
          v-model="name"
          class="input"
          type="text"
          placeholder="Введите название темы"
        />
      </main>
      <footer class="footer">
        <button @click="toogleWindowStatus('editTheme')" class="left">
          Отменить
        </button>
        <button @click="editTheme" class="right">Сохранить</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.32);
}

.wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  width: 400px;

  background: #232427;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 17px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.header-title {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 24px;
}

.close {
  border: none;
  background: inherit;
}

.close > img {
  filter: contrast(0.5);
}

.main {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
}

.title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.input {
  border: none;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 16px;
  background: #2a2b2e;
}

.input::placeholder {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.footer {
  background: #2d2e32;
  width: 100%;
  height: 64px;
  border-radius: 0 0 16px 16px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.left,
.right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  border-radius: 12px;
  padding: 12px 16px;
  width: 140px;
  height: 43px;
}

.left {
  border: 1px solid #2870dd;
  font-size: var(--inter-font);
  font-weight: bold;
  font-size: 16px;
  color: #2870dd;
  background: inherit;
}

.right {
  border: none;
  background: linear-gradient(90deg, #2870dd 0%, #255cea 100%);
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 16px;
}
</style>
