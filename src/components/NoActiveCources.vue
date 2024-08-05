<script setup></script>

<template>
  <div class="wrapper">
    <p class="title">У вас нет курсов</p>
    <p class="description">
      Вы еще не приобрели наши обучающие курсы. Перейдите в раздел “Курсы”,
      чтобы посмотреть текущие предложения и приобрести интересующий вас курс
    </p>
    <button class="connect-wallet"><p>Перейти в "Курсы"</p></button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: #1f2022;
  border-radius: 16px;
  max-width: 520px;
}

.title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 20px;
}

.description {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: #b9b9b9;
}

.connect-wallet {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  margin-top: 16px;
  display: flex;
  padding: 14px 16px;
  background: linear-gradient(225deg, #2660e8 0%, #093bac 100%);
  border-radius: 12px;
}

.connect-wallet p {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}
</style>
