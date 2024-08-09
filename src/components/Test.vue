<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  data: Object,
  isTestCompleted: Boolean,
});
console.log(props.data);

import Progresbar from "@/components/Progresbar.vue";
const currentPage = ref(1);
const clickedButton = ref(null);
const answers = ref([]);
const clicked = ref(false);
const isTestCompleted = ref(false);

const writeAnswer = (index) => {
  clicked.value = true;
  clickedButton.value = index;
  const answerObject = {};
  answerObject.index = index;
  answerObject.rightAnswer = props.data[currentPage.value - 1].rightAnswer;
  answers.value.push(answerObject);
};

const rightAnswers = ref(0);

watch(answers.value, () => {
  if (clickedButton.value === props.data[currentPage.value - 1].rightAnswer) {
    rightAnswers.value++;
  }
  console.log(answers.value);
});

const changePage = () => {
  clicked.value = false;
  clickedButton.value = null;
  if (currentPage.value === props.data.length) {
    isTestCompleted.value = true;
    console.log("Test completed");
  } else currentPage.value++;
};

const restartTest = () => {
  currentPage.value = 1;
  clicked.value = false;
  clickedButton.value = null;
  answers.value = [];
  rightAnswers.value = 0;
  isTestCompleted.value = false;
};
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <header class="header-text">
        <p class="title">{{ isTestCompleted ? "Тест пройден" : "Тест" }}</p>
        <p v-if="!isTestCompleted" class="question-count">
          {{ props.data.length }} вопросов
        </p>
      </header>
      <Progresbar
        v-if="!isTestCompleted"
        class="progress-bar"
        :maxPage="props.data.length"
        v-model="currentPage"
      />
    </header>
    <div class="result-block">
      <div v-if="!isTestCompleted" class="test-not-completed">
        Результат будет известен после прохождения теста
      </div>
      <div v-if="isTestCompleted" class="test-completed">
        <p class="right-answers">
          Вы ответили на {{ rightAnswers }} вопросов из {{ props.data.length }}
        </p>
        <p class="mark">Оценка: <span class="green">Хорошо</span></p>
      </div>
    </div>
    <div class="question-block">
      <div class="question-header"></div>

      <div v-if="!isTestCompleted" class="question">
        <p class="question-number">{{ currentPage }} вопрос</p>
        <ul class="question-list">
          <p class="question-text completed">
            {{ props.data[currentPage - 1].question }}
          </p>
          <li
            v-for="(element, index) in props.data[currentPage - 1].variants"
            :class="`question-variant ${
              index === clickedButton ? 'right' : ''
            }`"
            @click="writeAnswer(index)"
          >
            <div
              :class="`variant-image ${index === clickedButton ? 'right' : ''}`"
            ></div>
            <p class="variant-text">
              {{ props.data[currentPage - 1].variants[index] }}
            </p>
          </li>
        </ul>
      </div>
      <ul v-if="isTestCompleted" class="question-list completed">
        <div
          v-for="(element, blockIndex) in props.data[currentPage - 1].variants"
          class="completed-test-question-block"
        >
          <p class="question-text completed">
            {{ blockIndex + 1 + " вопрос. " + props.data[blockIndex].question }}
          </p>
          <li
            v-for="(element, index) in props.data[blockIndex].variants"
            :class="`question-variant ${
              index === answers[blockIndex].index &&
              index === answers[blockIndex].rightAnswer
                ? 'right'
                : index !== answers[blockIndex].index &&
                  index === answers[blockIndex].rightAnswer
                ? 'actual-right'
                : index === answers[blockIndex].index &&
                  index !== answers[blockIndex].rightAnswer
                ? 'wrong'
                : ''
            }`"
          >
            <!-- TODO: В общем тут (ниже и выше) логика такая: если текущий элемент соответствует выбранному элементу и соответствует верному, то он отмечается правильным,
                       иначе если элемент не соответствует выбранному элементу но соответствует верному, то он отмечается как настоящий правильный,
                       если элемент не соответствует выбранному элементу и не соответствует верному, то он отмечается как неправильный
				-->

            <div
              :class="`variant-image ${
                index === answers[blockIndex].index &&
                index === answers[blockIndex].rightAnswer
                  ? 'right'
                  : index !== answers[blockIndex].index &&
                    index === answers[blockIndex].rightAnswer
                  ? 'right'
                  : index === answers[blockIndex].index &&
                    index !== answers[blockIndex].rightAnswer
                  ? 'wrong'
                  : ''
              }`"
            ></div>
            <p class="variant-text">
              {{ props.data[blockIndex].variants[index] }}
            </p>
          </li>
        </div>
      </ul>
    </div>
    <button
      v-if="!isTestCompleted"
      :class="`button ${!clicked ? 'inactive' : ''}`"
      @click="changePage()"
    >
      <p>
        {{
          currentPage === props.data.length
            ? "Завершить тест"
            : "Следующий вопрос"
        }}
      </p>
    </button>
    <button v-if="isTestCompleted" class="restart" @click="restartTest()">
      <img src="@/assets/icons/button-icons/restart.svg" alt="" />
      <p>Пересдать тест</p>
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
}

.right-answers {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 20px;
}

.mark {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.mark > span {
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
  margin-bottom: 12px;
}

.question-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #b9b9b9;
}

.question-text.completed {
  margin-bottom: 8px;
}

.question-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.question-list.completed {
  gap: 16px;
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

.question-variant.actual-right {
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

.completed-test-question-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
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

.restart {
  border: none;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.restart > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}
</style>
