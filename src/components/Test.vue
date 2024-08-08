<script setup>
import { ref } from "vue";
const props = defineProps({
  data: Object,
  isTestCompleted: Boolean,
});
console.log(props.data);

import Progresbar from "@/components/Progresbar.vue";
const currentPage = ref(1);

const answers = ref([]);
const clicked = ref(false);

const checkAnswer = (index) => {
  clicked.value = true;
  const answerObject = {};
  if (index === props.data[currentPage.value - 1].rightAnswer) {
    answerObject.answer = true;
    answerObject.index = index;
  } else {
    answerObject.answer = false;
    answerObject.index = index;
    answerObject.rightAnswer = props.data[currentPage.value - 1].rightAnswer;
  }
  answers.value.push(answerObject);
  console.log(answers.value);
};
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <header class="header-text">
        <p class="title">Тест</p>
        <p class="question-count">{{ props.data.length }} вопросов</p>
      </header>
      <Progresbar
        class="progress-bar"
        :maxPage="props.data.length"
        v-model="currentPage"
      />
    </header>
    <div class="result-block">
      <div v-if="!props.data.isTestCompleted" class="test-not-completed">
        Результат будет известен после прохождения теста
      </div>
      <div v-if="props.data.isTestCompleted" class="test-completed">
        Оценка: <span>Хорошо</span>
      </div>
    </div>
    <div class="question-block">
      <div class="question-header">
        <p class="question-number">{{ currentPage }} вопрос</p>
        <p class="question-text">
          {{ props.data[currentPage - 1].question }}
        </p>
      </div>
      <ul class="question-list">
        <li
          v-for="(element, index) in props.data[currentPage - 1].variants"
          :class="`question-variant ${
            answers[currentPage - 1]?.index === index &&
            answers[currentPage - 1]?.answer
              ? 'right'
              : clicked && answers[currentPage - 1]?.index === index
              ? 'wrong'
              : index === answers[currentPage - 1]?.rightAnswer
              ? 'actualRight'
              : ''
          }`"
          @click="checkAnswer(index)"
        >
          <!-- TODO: В общем тут (ниже и выше) логика такая: если ничего на элемент нажали, и он правильный, то изображение и рамка зеленые
									Если нажатие было, но элемент неправильный, то рамка и изображение красные,
									Если нажатие было, элемент неправильный, но индекс равен правильному индексу, то изображение и фоновое изображение зеленые 
				-->

          <div
            :class="`variant-image ${
              answers[currentPage - 1]?.index === index &&
              answers[currentPage - 1]?.answer
                ? 'right'
                : clicked && answers[currentPage - 1]?.index === index
                ? 'wrong'
                : index === answers[currentPage - 1]?.rightAnswer
                ? 'right'
                : ''
            }`"
          ></div>
          <p class="variant-text">
            {{ props.data[currentPage - 1].variants[index] }}
          </p>
        </li>
      </ul>
    </div>
    <button class="button" @click="currentPage++">
      <p>
        {{
          currentPage === props.data.length
            ? "Завершить тест"
            : "Следующий вопрос"
        }}
      </p>
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.08);
  background: #1f2022;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
}

.header-text {
  display: flex;
  width: fit-content;
  flex-wrap: nowrap;
  gap: 10px;
  align-items: center;
}

.title {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 24px;
}

.question-count {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  color: #b9b9b9;
  white-space: nowrap;
}

.progress-bar {
  display: flex;
  width: 100%;
}

.result-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
}

.test-not-completed {
  border-radius: 16px;
  padding: 12px;
  align-self: flex-start;
  width: fit-content;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.48);
}

.test-completed {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.test-completed > span {
  font-weight: 500;
  font-size: 14px;
  text-align: center;
}

.green {
  color: #32b413;
}

.yellow {
  color: #fcac34;
}

.red {
  color: #e33;
}

.question-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.question-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.question-number {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 20px;
}

.question-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #b9b9b9;
}

.question-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.question-variant {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 16px;
  border-radius: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.04);
}

.question-variant.right {
  border: 1px solid #32b413;
}

.question-variant.wrong {
  border: 1px solid #e33;
}

.question-variant.actualRight {
  background: rgba(50, 180, 19, 0.04);
}

.variant-image {
  display: flex;

  width: 24px;
  height: 25px;
  background: url(@/assets/icons/button-icons/radio-button.svg);
}

.variant-image.right {
  background: url(@/assets/icons/button-icons/right.svg);
}

.variant-image.wrong {
  background: url(@/assets/icons/button-icons/wrong.svg);
}

.variant-text {
  font-family: var(--inter-font);
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

.button {
  display: flex;
  align-items: center;
  align-self: flex-end;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 32px;
  border: none;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.button.inactive {
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  opacity: 0.3;
  pointer-events: none;
}

.button > p {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
}
</style>
