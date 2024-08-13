<script setup>
import { ref, onMounted } from "vue";
import TextField from "@/components/TextField.vue";
import HelpButton from "@/components/HelpButton.vue";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "@/assets/plyr-custom.css";
import Test from "@/components/Test.vue";
import {
  isWindowActive,
  toogleWindowStatus,
} from "@/functions/modalWindowsStatus";
import NewTestModalWindow from "@/components/NewTestModalWindow.vue";
import DeleteTestModalWindow from "@/components/DeleteTestModalWindow.vue";
import StudentHomeworkModalWindow from "@/components/StudentHomeworkModalWindow.vue";

const props = defineProps({ data: Object, isAdmin: Boolean });
const status = ref("");
const test = ref(true);

const tableData = ref([
  { name: "@zaivanza", status: "Ждет оценку", mark: null },
  { name: "@zaivanza", status: "Нет ответа", mark: null },
  { name: "@zaivanza", status: "Проверено", mark: "Отлично" },
]);

const statusFilter = ref(["Все", "Ждет оценку", "Нет ответа", "Проверено"]);
const markFilter = ref(["Все", "Отлично", "Хорошо", "Пойдет", "Плохо"]);

const filterValues = ref({
  status: "Все",
  mark: "Все",
});

const dropdownMenuStatus = ref({
  status: false,
  mark: false,
});

const toogleDropdownMenu = (type) => {
  dropdownMenuStatus.value[type] = !dropdownMenuStatus.value[type];
};

const toogleFilter = (value, filter, type) => {
  console.log(filterValues.value[type]);
  filterValues.value[type] = filter[value];
  toogleDropdownMenu(type);
};

onMounted(() => {
  switch (props.data.status) {
    case "waiting":
      status.value = "Ждем вашего ответа";
      break;
    case "checking":
      status.value = "Проверяется преподавателем";
      break;
    case "checked":
      status.value = "Проверено преподавателем";
      break;
  }
  const player = new Plyr("#player");
});

const currentPage = ref(1);

const tooglePage = (id) => {
  currentPage.value = id;
};
</script>

<template>
  <NewTestModalWindow v-if="isWindowActive['newTest'].status" />
  <DeleteTestModalWindow v-if="isWindowActive['deleteTest'].status" />
  <StudentHomeworkModalWindow v-if="isWindowActive['studentHomework'].status" />
  <div class="homework">
    <header class="header">
      <div class="header-top">
        <p class="header-title">{{ props.data.title }}</p>
        <p class="status">{{ status }}</p>
      </div>
      <div class="header-theme">
        <p class="theme">{{ props.data.theme }}</p>
      </div>
    </header>
    <main v-if="!props.isAdmin" class="main">
      <p class="main-title">Описание</p>
      <div class="divider"></div>
      <p class="task-title">Задание от преподавателя</p>
      <p v-for="(el, index) in props.data.tasks" class="task-text">
        {{ props.data.tasks[index] }}
      </p>
      <Test
        v-if="props.data?.test"
        :data="props.data?.test"
        :isTestCompleted="props.data.isTestCompleted"
      />
      <div
        v-show="status === 'Проверено преподавателем' && !props.isAdmin"
        class="teacher-block"
      >
        <p class="time">Ср, 14 окт., 22:01 MSK (UTC+3)</p>
        <div class="teacher-info">
          <p class="teacher-info-title">Преподаватель</p>
          <p class="name">Иван Иванов</p>
        </div>
        <p class="teacher-comment">Привет! Всё круто! Молодец!</p>
        <div class="player">
          <video
            v-if="props.data.videoUrl"
            id="player"
            playsinline
            controls
            poster="https://atuin.ru/demo/plyr/poster.jpg"
          >
            <source :src="props.data.videoUrl" type="video/mp4" />
          </video>
        </div>
        <div class="divider"></div>
        <div class="mark-block">
          <p class="mark-text">Оценка:</p>
          <p class="mark-value green">Отлично</p>
        </div>
      </div>
      <TextField class="text-field" :isFiles="false" :ifTime="false" />
      <HelpButton />
    </main>
    <main v-if="props.isAdmin" class="main">
      <div class="main-header">
        <div class="main-pages">
          <button
            @click="tooglePage(1)"
            :class="`page-button left ${currentPage === 1 ? 'active' : ''}`"
          >
            <p>Описание</p>
          </button>
          <button
            @click="tooglePage(2)"
            :class="`page-button right ${currentPage === 2 ? 'active' : ''}`"
          >
            <p>Работы студентов</p>
          </button>
        </div>
      </div>
      <div class="page-one" v-if="currentPage === 1">
        <button
          v-if="!test"
          @click="toogleWindowStatus('newTest')"
          class="add-test"
        >
          <img src="@/assets/icons/button-icons/add.svg" alt="" />Добавить тест
        </button>
        <div v-if="test" class="test-block">
          <p class="test-block-header">Добавлен тест</p>
          <div class="test-block-bottom">
            <p class="test-questions-count">5 вопросов</p>
            <button @click="toogleWindowStatus('newTest')" class="edit-test">
              <img
                src="@/assets/icons/button-icons/edit.svg"
                alt=""
                class="edit-test-img"
              />
              <p class="edit-test-text">Редактировать тест</p>
            </button>
            <button
              @click="toogleWindowStatus('deleteTest')"
              class="delete-test"
            >
              <img src="@/assets/icons/button-icons/red-trash.svg" alt="" />
              <p class="delete-test-text">Удалить тест</p>
            </button>
          </div>
        </div>
        <div class="main-description">
          <div class="main-content-title">Описание</div>
          <div class="divider"></div>
          <TextField :isAdmin="true" />
        </div>
      </div>
      <div class="page-two" v-if="currentPage === 2">
        <div class="students-info">
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
              <p class="deadline-time">16.07.2024</p>
            </div>
          </div>
        </div>
        <div class="table">
          <div class="filters">
            <div class="filter-block search-bar">
              <img src="@/assets/icons/button-icons/search.svg" alt="" />
              <div class="text-block">
                <p class="text-block-top">Поиск по имени или адресу студента</p>
                <p contenteditable="true" class="text-block-bottom">zaiv</p>
              </div>
            </div>
            <div class="filter-wrapper">
              <div
                @click="toogleDropdownMenu('status')"
                class="filter-block filter"
              >
                <div class="text-block">
                  <p class="text-block-top">Статус</p>
                  <p class="text-block-bottom">{{ filterValues.status }}</p>
                </div>
                <button>
                  <img
                    :class="`show-img ${
                      dropdownMenuStatus['status'] ? 'active' : ''
                    }`"
                    src="@/assets/icons/button-icons/faq-show-img.svg"
                    alt=""
                  />
                </button>
              </div>
              <div class="dropdown-menu" v-if="dropdownMenuStatus['status']">
                <button
                  v-for="(element, index) in statusFilter"
                  class="dropdown-item"
                  @click="toogleFilter(index, statusFilter, 'status')"
                >
                  <p>{{ element }}</p>
                </button>
              </div>
            </div>
            <div class="filter-wrapper">
              <div
                @click="toogleDropdownMenu('mark')"
                class="filter-block filter"
              >
                <div class="text-block">
                  <p class="text-block-top">Оценка</p>
                  <p class="text-block-bottom">{{ filterValues.mark }}</p>
                </div>
                <button>
                  <img
                    :class="`show-img ${
                      dropdownMenuStatus['mark'] ? 'active' : ''
                    }`"
                    src="@/assets/icons/button-icons/faq-show-img.svg"
                    alt=""
                  />
                </button>
              </div>
              <div class="dropdown-menu" v-if="dropdownMenuStatus['mark']">
                <button
                  v-for="(element, index) in markFilter"
                  class="dropdown-item"
                  @click="toogleFilter(index, markFilter, 'mark')"
                >
                  <p>{{ element }}</p>
                </button>
              </div>
            </div>
          </div>
          <div class="table-header">
            <div class="table-header-titles">
              <div class="first-column">
                <p class="table-title-text">Студент</p>
              </div>
              <div class="second-column">
                <p class="table-title-text">Статус</p>
              </div>
              <div class="third-column">
                <p class="table-title-text">Оценка</p>
              </div>
            </div>
          </div>
          <ul class="table-list">
            <li v-for="(element, index) in tableData" class="table-items">
              <div class="table-name-block">
                <p class="name-block-top">0x424ca...a6f5F6c</p>
                <p class="name-block-bottom">{{ element.name }}</p>
              </div>
              <div class="table-status-block">
                <p class="table-text">{{ element.status }}</p>
              </div>
              <div class="table-mark-block">
                <p :class="`table-text ${element.mark ? 'green' : ''}`">
                  {{ element.mark ? element.mark : "-" }}
                </p>
              </div>
              <button
                @click="toogleWindowStatus('studentHomework')"
                :class="`view-button ${
                  element.status === 'Нет ответа' ? 'disabled' : ''
                }`"
              >
                <img src="@/assets/icons/button-icons/eye.svg" alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.homework {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 24px;
}

.status {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.header-theme {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
}

.theme {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border-radius: 32px;
  padding: 16px;
  background: #151514;
}

.main-title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 24px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.12);
}

.task-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}

.task-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

.teacher-block {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  background: rgba(40, 112, 221, 0.08);
}

.time {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.32);
}

.teacher-info-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.teacher-name {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.teacher-comment {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
}

.player {
  width: 40%;
}

.mark-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 4px;
}

.mark-text {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.mark-value {
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

.text-field {
  width: 100%;
  margin-top: 16px;
}

/* page one */

.main-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.main-pages {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 4px;
  background: #171717;
}

.page-button {
  transition: 300ms;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  background: inherit;
}

.page-button > p {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 16px;
  color: #b9b9b9;
}

.page-button.active {
  transition: 300ms;
  background: rgba(40, 112, 221, 0.16);
}

.page-button.active > p {
  color: #2870dd;
}

.page-button.left {
  padding: 12px 80px;
}

.page-button.right {
  padding: 12px 46px;
}

.page-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.add-test {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
  font-family: var(--inter-semibold-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border: none;
}

.add-test > img {
  width: 15px;
}

.test-block {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.test-block-header {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.test-block-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.test-questions-count {
  font-family: var(--inter-semibold-font);
  font-weight: 600;
  font-size: 16px;
}

.edit-test,
.delete-test {
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.delete-test {
  background-color: inherit;
}

.edit-test-text,
.delete-test-text {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
}

.delete-test-text {
  color: #e33;
}

.main-description {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.main-content-title {
  font-family: var(--inter-semibold-font);
  font-weight: bold;
  font-size: 24px;
}

/* page-two styles */

.blocks {
  display: flex;
  gap: 16px;
  border-radius: 16px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
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
}

.deadline-time {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
}

/* table styles */
.page-two {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.students-info {
  width: fit-content;
}

.table {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  background: #151514;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 8px 8px 16px;
  gap: 10px;
}

.filter-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 12px;
  width: 195px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 6px 12px;
}

.text-block-top {
  font-family: var(--inter-semibold-font);
  font-weight: 500;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.32);
}

.search-bar {
  width: 390px;
  justify-content: flex-start;
}

.search-bar > img {
  width: 24px;
  aspect-ratio: 1;
  filter: invert(0.4);
}

.text-block-bottom {
  font-family: var(--inter-semibold-font);
  font-weight: 700;
  font-size: 14px;
}

.filter {
  cursor: pointer;
}

.filter > button {
  border: none;
  background: none;
}

.show-img {
  transition: 300ms;
  rotate: 0deg;
}

.show-img.active {
  transition: 300ms;
  rotate: 180deg;
}

.filter-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.dropdown-menu {
  width: 100%;
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  background: #151514;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 8px;
  gap: 8px;
  z-index: 2;
}

.dropdown-item {
  border: none;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  padding: 6px 12px;
}

.dropdown-item > p {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 14px;
}

.table-header {
  background: #252628;
}

.table-header-titles {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 84px 12px 16px;
  gap: 16px;
}

:is(.first-column, .second-column, .third-column) {
  width: 425px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-column {
  justify-content: flex-start;
}

.table-title-text {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.36);
}

.table-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  max-height: 245px;
  overflow-y: auto;
}

.table-items {
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 65px;
  padding: 16px;
}

.table-items:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.table-status-block,
.table-mark-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.view-button {
  width: 68px;
  height: 44px;
  border-radius: 12px;
  padding: 12px 24px;
  border: none;
  background: rgba(255, 255, 255, 0.04);
}

.view-button.disabled {
  pointer-events: none;
  background: rgba(255, 255, 255, 0.04);
  filter: opacity(0.32);
}

.table-text {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.36);
}

.name-block-top {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.36);
}

.name-block-bottom {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
}

.table-text.green {
  color: #32b413;
}
</style>
