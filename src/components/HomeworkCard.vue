<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  data: Object,
  isAdmin: Boolean,
});

const status = ref({
  isWaiting: false,
  isCkecking: false,
});

const grade = ref({
  color: "",
  text: "",
});

const setGrade = () => {
  switch (props.data.grade) {
    case 2:
      grade.value.color = "red";
      grade.value.text = "Плохо";
      break;
    case 3:
      grade.value.color = "yellow";
      grade.value.text = "Пойдет";
      break;
    case 4:
      grade.value.color = "green";
      grade.value.text = "Хорошо";
      break;
    case 5:
      grade.value.color = "green";
      grade.value.text = "Отлично";
      break;
  }
};

const setStatus = () => {
  switch (props.data.status) {
    case "waiting":
      status.value.isWaiting = true;
      status.value.isCkecking = false;
      break;

    case "checking":
      status.value.isWaiting = true;
      status.value.isCkecking = true;
      break;
    case "checked":
      status.value.isWaiting = false;
      status.value.isCkecking = false;
      break;
  }
};

onMounted(() => {
  if (props.data) {
    setStatus();
    setGrade();
  }
  console.log(grade.value.color);
});
</script>

<template>
  <router-link class="router-link">
    <div class="homework-card">
      <div class="main-block">
        <header class="card-header">
          <div class="attestation">
            <p>{{ props.data.attistationType }}</p>
          </div>
          <div class="cource">
            <p>{{ props.data.cource }}</p>
          </div>
        </header>
        <p class="title">{{ props.data.title }}</p>
      </div>
      <p class="theme">Курс: {{ props.data.theme }}</p>
      <div class="divider"></div>
      <footer v-if="!isAdmin" class="card-footer">
        <div v-if="status.isWaiting" class="info-block">
          <p class="status">
            {{
              status.isCkecking
                ? "Проверяется преподавателем"
                : "Ждем вашего ответа"
            }}
          </p>
          <div class="deadline">
            <img src="@/assets/icons/duration.svg" alt="" />
            <p class="deadline-text">Дедлайн:</p>
            <p class="time">{{ props.data.deadline }}</p>
          </div>
        </div>
        <div v-if="!status.isWaiting" class="grade-block">
          <p class="status">Проверено преподавателем</p>
          <div class="grade">
            <p class="grade-text">Оценка:</p>
            <p :class="`grade-value ${grade.color}`">{{ grade.text }}</p>
          </div>
        </div>
        <button class="goto-button">
          <img src="@/assets/icons/button-icons/go-to-arrow.svg" alt="" />
        </button>
      </footer>

      <footer v-if="isAdmin" class="card-footer">
        <div class="blocks">
          <div class="footer-block">
            <p class="block-title">Сдали работы</p>
            <p class="count"><span class="count-span">3</span> / 32</p>
          </div>
          <div class="vertical-divider"></div>
          <div class="footer-block">
            <p class="block-title">Ждут оценки</p>
            <p class="count"><span class="count-span">1</span> / 3</p>
          </div>
          <div class="vertical-divider"></div>
          <div class="deadline">
            <img src="@/assets/icons/duration.svg" alt="" />
            <p class="deadline-text">Дедлайн:</p>
            <p class="time">{{ props.data.deadline }}</p>
          </div>
        </div>
        <button class="goto-button">
          <img src="@/assets/icons/button-icons/go-to-arrow.svg" alt="" />
        </button>
      </footer>
    </div>
  </router-link>
</template>

<style scoped>
.homework-card {
  transition: 400ms;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  background: #26272b;
  cursor: pointer;
}

.homework-card:hover {
  transition: 400ms;
  background: #1f2022;
}

.main-block {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
}

.attestation,
.cource {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 16px;
  padding: 6px 12px;
  background: rgba(40, 112, 221, 0.04);
}

.cource {
  background: rgba(255, 255, 255, 0.04);
}

.cource > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
}

.attestation > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: #2870dd;
}

.title {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 20px;
}

.theme {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
}

.card-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
}

.info-block {
  width: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 6px;
}

.status {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.deadline {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 4px;
}

.deadline-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
  text-align: center;
}

.time {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
}

.grade-block {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 6px;
}

.status {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.grade {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 4px;
}

.grade-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.grade-value {
  font-family: var(--inter-font);
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

.goto-button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 12px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.04);
}

.blocks {
  display: flex;
  gap: 12px;
}

.footer-block {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
}

.block-title {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.count {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  line-height: 1.42857;
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
}

.count-span {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}

.vertical-divider {
  width: 1px;
  height: 44px;
  margin-top: 1%;
  background: rgba(255, 255, 255, 0.12);
}
</style>
