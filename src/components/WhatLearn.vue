<script setup></script>

<template>
  <div class="container">
    <p class="title">Что вы изучите</p>
    <div class="discription">
      <div class="wrapper">
        <p class="technology">Основы Python</p>
        <div class="divider"></div>
        <p class="technology-description">
          Необходимые знания в python, чтобы комфортно работать в web3
          пространстве
        </p>
      </div>
      <div class="wrapper">
        <p class="technology">Web3</p>
        <div class="divider"></div>
        <p class="technology-description">
          Вы получите необходимые знания в python, чтобы комфортно работать с
          web3
        </p>
      </div>
      <div class="wrapper">
        <p class="technology">Web3 <span>PRO</span></p>
        <div class="divider"></div>
        <p class="technology-description">
          Вы получите необходимые знания в python, чтобы комфортно работать с
          web3
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 64px 0;
  max-width: 100%;
}

.title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 72px;
}

.discription {
  margin-top: 42px;
  display: flex;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.technology {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 42px;
}

span {
  font-weight: 600;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.divider {
  width: 124px;
  height: 4px;
  background: linear-gradient(
    90deg,
    #3a1862 0%,
    #4c04cb 50%,
    #7e30ba 81%,
    #9c4ab0 100%
  );
}

.technology-description {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 24px;
  color: #ffffffa3;
}
</style>
