<script setup></script>

<template>
  <div class="experts-wrapper">
    <p class="title">Эксперты</p>
    <div class="experts-block">
      <div class="expert">
        <div class="avatar"></div>
        <p class="name">Никита</p>
      </div>
      <div class="achievements">
        <p class="gray-text">Достижения</p>
        <ul class="list">
          <li v-for="i in 7" class="item">
            <p class="achievement">Криптоинвестор более 5 лет</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experts-wrapper {
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 64px 0;
}

.title {
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 72px;
}

.experts-block {
  display: flex;
  gap: 8px;
}

.expert {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border-radius: 24px;
  padding: 12px;
  background: #161613;
}

.avatar {
  border-radius: 16px;
  background: #070707;
  width: 230px;
  height: 230px;
  background-size: cover;
  background-position: center;
}

.name {
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 32px;
}

.achievements {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 24px;
  padding: 24px 170px 24px 24px;
  background: #161613;
}

.gray-text {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.48);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.achievement {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
}
</style>
