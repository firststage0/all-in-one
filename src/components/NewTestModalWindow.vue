<script setup>
import { ref, watch } from "vue";
import { toogleWindowStatus } from "@/functions/modalWindowsStatus";
const questions = ref([
  {
    id: 1,
    question: null,
    rightAnswer: 0,
    variants: ["", ""],
  },
]);

const addQuestion = () => {
  console.log(typeof questions.value.length);

  questions.value.push({
    id: questions.length + 1,
    question: null,
    rightAnswer: 0,
    variants: ["", ""],
  });
};

watch(questions, () => {
  console.log(questions.value);
});

const setRightAnswer = (blockIndex, variantIndex) => {
  questions.value[blockIndex].rightAnswer = variantIndex;
};

const addVariant = (blockIndex) => {
  questions.value[blockIndex].variants.push("");
};
</script>

<template>
  <div class="modal-window" @click.self="toogleWindowStatus('newTest')">
    <div class="wrapper">
      <header class="header">
        <p class="header-title">Добавление теста</p>
        <button class="close-button" @click="toogleWindowStatus('newTest')">
          <img src="@/assets/icons/close-icon.svg" alt="" />
        </button>
      </header>

      <main class="main">
        <div v-for="(question, blockIndex) in questions" class="question-block">
          <p class="question-title">{{ blockIndex + 1 }} вопрос</p>
          <input
            class="input"
            type="text"
            placeholder="Вопрос"
            v-model="questions[blockIndex].question"
          />
          <ul class="variants-list">
            <li
              v-for="(variant, variantIndex) in question.variants"
              class="item"
            >
              <p class="count">{{ variantIndex + 1 }}.</p>
              <button
                @click="setRightAnswer(blockIndex, variantIndex)"
                :class="`item-button ${
                  variantIndex === questions[blockIndex].rightAnswer
                    ? 'active'
                    : ''
                }`"
              ></button>
              <input
                type="text"
                class="input"
                placeholder="Ответ"
                v-model="questions[blockIndex].variants[variantIndex]"
              />
            </li>
            <button @click="addVariant(blockIndex)" class="add-button variant">
              <img src="@/assets/icons/button-icons/add.svg" alt="" />
              <p>Добавить вариант ответа</p>
            </button>
          </ul>
          <div class="divider"></div>
        </div>

        <button @click.stop="addQuestion" class="add-button">
          <img src="@/assets/icons/button-icons/add.svg" alt="" />
          <p>Добавить новый вопрос</p>
        </button>
      </main>

      <footer class="footer">
        <button
          @click="
            () => {
              console.log(questions);
            }
          "
          class="submit-button"
        >
          <p>Добавить тест</p>
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.wrapper {
  position: relative;
  width: 1040px;
  height: 705px;
  background: #232427;
  border-radius: 16px;
}

.header,
.main,
.footer {
  display: flex;
  width: 100%;
}

.header {
  padding: 16px 24px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.header-title {
  display: flex;
  align-items: center;
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 24px;
}

.close-button {
  width: 48px;
  aspect-ratio: 1;
  border: none;
  background: inherit;
}

.close-button > img {
  filter: contrast(0.5);
}

.main {
  width: 100%;
  position: relative;
  min-height: 79%;
  max-height: 80%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  overflow-y: auto;
}

.question-block {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.question-title {
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 20px;
}

.input {
  width: 100%;
  border: none;
  background: #1f2022;
  padding: 16px;
  border-radius: 16px;
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.32);
}

.variants-list {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
}

.add-button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
  border-radius: 13px 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.add-button.variant {
  margin-left: 28px;
}

.add-button > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.add-button > img {
  width: 14px;
  aspect-ratio: 1;
}

.item {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
}

.count {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
}

.item-button {
  width: 26px;
  aspect-ratio: 1;
  border: none;
  border-radius: 50%;
  background: inherit;
  background-repeat: no-repeat;
  background-image: url(@/assets/icons/button-icons/radio-button.svg);
}

.item-button.active {
  background-image: url(@/assets/icons/button-icons/right.svg);
}

.footer {
  position: absolute;
  bottom: 0;
  border-radius: 0 0 16px 16px;
  justify-content: flex-end;
  background: #2d2e32;
  padding: 12px 24px;
}

.submit-button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px 32px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.submit-button > p {
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
}
</style>
