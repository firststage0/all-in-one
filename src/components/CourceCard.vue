<script setup>
const props = defineProps({
  data: Object,
  isFooterActive: Boolean,
});
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <header class="header">
        <div class="type-block">
          <img
            src="@/assets/icons/courcecard-type.svg"
            alt=""
            class="title-image"
          />
          <p class="cource-card-type">Программирование</p>
        </div>
        <p class="for-who">Для начинающих</p>
      </header>
      <main class="main">
        <div class="title-block">
          <img
            src="@/assets/images/cource-card-title-image.svg"
            alt=""
            class="cource-image"
          />
          <p class="cource-title">Web3 Python-разработчик</p>
        </div>
        <div class="progress-block">
          <img
            class="progress-bar"
            src="@/assets/images/cource-card-progress-bar.png"
            alt=""
          />
          <div class="progess-block left">
            <p class="progress-title">Процесс прохождения</p>
            <p class="progress">25%</p>
          </div>
          <div class="vertical-divider"></div>
          <div class="progess-block right">
            <p class="watched-title">Просмотрено</p>
            <p class="watched"><span>3</span> / 576 уроков</p>
          </div>
        </div>
      </main>
      <div v-if="isFooterActive" class="divider"></div>
      <footer v-if="isFooterActive" class="footer">
        <div class="footer-info">
          <div class="start">
            <p class="start-title">Начало</p>
            <p class="date">06 Июля, 2024</p>
          </div>
          <div class="vertical-divider"></div>
          <div class="duration-block">
            <p class="duration-title">Длительность</p>
            <p class="duration">6 мес.</p>
          </div>
        </div>
        <button class="goto">
          <p class="button-text">Перейти</p>
          <img
            src="@/assets/icons/button-icons/go-to-arrow.svg"
            alt=""
            class="button-image"
          />
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 950px;
  height: fit-content;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: #151514;
  cursor: pointer;
}

.content {
  transition: 400ms;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #26272b;
  border-radius: 16px;
  padding: 16px;
}

.content:hover {
  transition: 400ms;
  background-color: #1f2022;
}

.header {
  display: flex;
  justify-content: space-between;
}

.main {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.type-block {
  display: flex;
  gap: 4px;
  align-items: center;
}

.cource-card-type {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: #fff;
}

.title-block {
  display: flex;
  align-items: center;
  gap: 12px;
  height: fit-content;
}

.cource-image {
  width: 74px;
  aspect-ratio: 1;
}

.cource-title {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 24px;
}

.progress-block {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 16px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.progress-block .left,
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.progress-title,
.watched-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.progress {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}

.vertical-divider {
  width: 1px;
  height: 80%;
  background-color: #ffffff14;
}

.watched > span {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}

.watched {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
}

.divider {
  margin-top: 16px;
  width: 100%;
  height: 1px;
  background-color: #ffffff14;
}

.footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.footer-info {
  border-radius: 16px;
  background-color: #ffffff0a;
  padding: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.start-title,
.duration-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.date,
.duration {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.goto {
  display: flex;
  align-items: flex-end;
  background-color: #ffffff0a;
  border-radius: 16px;
  padding: 14px 24px;
  border: none;
  height: fit-content;
  gap: 10px;
}

.button-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.button-image {
  display: flex;
  align-items: center;
}
</style>
