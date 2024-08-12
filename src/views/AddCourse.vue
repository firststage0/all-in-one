<script setup>
import { ref, onMounted } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import coursesList from "@/data/coursesList.json";
import {
  ref as refStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "@/functions/firebase";

const course = ref({
  title: null,
  level: null,
  sphere: null,
  price: null,
  duration: null,
  date: null,
  image: null,
});

const buttonId = ref(0);
const changeLevel = (level) => {
  buttonId.value = level;
  switch (level) {
    case 0:
      course.value.level = "Для начинающих";
      break;
    case 1:
      course.value.level = "Для профессионалов";
      break;
    case 2:
      course.value.level = "Для всех";
      break;
  }
};

onMounted(() => {
  document
    .getElementById("uploadForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const fileInput = document.getElementById("fileInput");
      const file = fileInput.files[0];

      const storageRef = refStorage(storage, "images/" + file.name);

      const metadata = {
        contentType: file.type,
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.refStorage).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    });
});
</script>

<template>
  <HeaderComponent />
  <div class="page">
    <div class="container">
      <form id="uploadForm" style="margin-bottom: 40px">
        <h1>Тестовая форма загрузки изображения в firebase</h1>
        <input type="file" name="file" id="fileInput" />
        <button type="submit">Upload</button>
      </form>
      <p class="title">Добавление курса</p>
      <div class="wrapper">
        <div class="settings">
          <div class="setting">
            <div class="setting-title">Обложка</div>
            <div class="drag-and-drop">
              <img src="@/assets/icons/button-icons/add-image.svg" alt="" />
              <p>Перетащите или нажмите чтобы загрузить изображение</p>
            </div>
          </div>
          <div class="setting">
            <div class="setting-title">Название курса</div>
            <input
              class="input"
              type="text"
              placeholder="Введите название курса"
              v-model="course.title"
            />
          </div>
          <div class="setting">
            <div class="setting-title">Уровень</div>
            <div class="levels">
              <button
                @click="changeLevel(0)"
                :class="`level ${buttonId === 0 ? 'active' : ''}`"
              >
                Для начинающих
              </button>
              <button
                @click="changeLevel(1)"
                :class="`level ${buttonId === 1 ? 'active' : ''}`"
              >
                Для профессионалов
              </button>
              <button
                @click="changeLevel(2)"
                :class="`level ${buttonId === 2 ? 'active' : ''}`"
              >
                Для всех
              </button>
            </div>
          </div>
          <div class="setting">
            <div class="setting-title">Сфера</div>
            <input
              v-model="course.sphere"
              class="input"
              type="text"
              placeholder="Введите сферу курса"
            />
          </div>
          <div class="setting">
            <div class="setting-title">Цена курса</div>
            <input
              v-model="course.price"
              class="input"
              type="text"
              placeholder="Введите контракт курса"
            />
          </div>
          <div class="bottom-settings">
            <div class="setting duration">
              <div class="setting-title">Длительность курса</div>
              <input
                v-model="course.duration"
                class="input"
                type="text"
                placeholder="Введите число"
              />
              <p class="input-right-text">Мес.</p>
            </div>
            <div class="setting">
              <div class="setting-title">Дата начала курса</div>
              <input
                v-model="course.date"
                class="input"
                type="text"
                placeholder="дд.мм.гг"
              />
            </div>
          </div>
          <button class="create"><p>Создать курс</p></button>
        </div>
        <div class="card-block">
          <p class="preview">Предпросмотр</p>
          <div class="card">
            <div class="top">
              <div class="top-left">
                <img src="@/assets/icons/programming.svg" alt="" />
                <p class="sphere">Программирование</p>
              </div>
              <div class="top-right">{{ course?.level }}</div>
            </div>
            <div class="card-image"></div>
            <p class="card-title">{{ course?.title ? course.title : "-" }}</p>
            <div class="card-bottom">
              <div class="bottom-left">
                <div class="bottom-block">
                  <p class="card-bottom-title">Цена</p>
                  <p class="card-bottom-value">
                    {{ course?.price ? course.price : "-" }} USDT
                  </p>
                </div>
                <div class="vertical-divider"></div>
                <div class="bottom-block">
                  <p class="card-bottom-title">Длительность</p>
                  <p class="card-bottom-value">
                    {{ course?.duration ? course.duration : "-" }} мес.
                  </p>
                </div>
              </div>
              <div class="bottom-right">
                <div class="bottom-block">
                  <p class="card-bottom-title">Начало</p>
                  <p class="card-bottom-value">
                    {{ course?.date ? course.date : "-" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  margin-top: calc(var(--header-height) + 46px);
  width: 1040px;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 24px;
}

.wrapper {
  display: flex;
  gap: 30px;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 16px 0px;
  width: 620px;
}

.setting {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.setting-title {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 20px;
}

.drag-and-drop {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border: 1px dashed rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  padding: 32px;
}

.drag-and-drop > p {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
}

.input {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  outline: none;
  border: none;
  background: #1f2022;
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
}

.input::placeholder {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.levels {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 4px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.08);
  background: #171717;
}

.level {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 13px 40px;
  background: inherit;
  transition: 300ms;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  border: none;
}

.level.active {
  transition: 300ms;
  background: rgba(40, 112, 221, 0.16);
  color: #2870dd;
}

.bottom-settings {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
}

.setting.duration {
  position: relative;
}

.input-right-text {
  position: absolute;
  right: 16px;
  top: 61%;

  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.48);
}

.create {
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  padding: 12px 32px;
  gap: 8px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.create > p {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
}

.card-block {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.preview {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
}

.card {
  width: 384px;
  height: 363px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 16px;
  background: #1f2022;
}

.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.top-left {
  display: flex;
  gap: 7px;
  align-items: center;
}

.top-right {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.card-image {
  width: 352px;
  height: 178px;
  background: url(@/assets/icons/no-image.svg);
  background-size: 132px;
  background-repeat: no-repeat;
  background-position: center;
}

.card-title {
  align-self: flex-start;
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 24px;
}

.card-bottom {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-radius: 16px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.bottom-left,
.bottom-right {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
}

.card-bottom-title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.48);
}

.card-bottom-value {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.bottom-block {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 4px;
}

.vertical-divider {
  width: 1px;
  height: 48px;
  background: rgba(255, 255, 255, 0.08);
}
</style>
