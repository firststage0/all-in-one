<script setup>
import "@/assets/css/style.css";
import { ref, watch } from "vue";
import { fetcher } from "@/functions/fetcher";
import { formateDate } from "@/functions/dateFormatter";
const props = defineProps({
  isAdmin: Boolean,
});
const isLoading = ref(false);
const jsonData = ref({});
const url = `https://dev.aiostudy.com/api/v1/courses/get-courses?UserToken=${
  import.meta.env.VITE_APP_ADMIN_TOKEN
}`;

const promise = fetcher(url);

isLoading.value = true;
promise.then((data) => {
  jsonData.value = data;
  isLoading.value = false;
});

const formatedDates = ref([]);

watch(jsonData, () => {
  for (let i = 0; i < jsonData.value.Courses.length; i++) {
    formatedDates.value[i] = formateDate(jsonData.value.Courses[i].StartDate);
  }
});
</script>

<template>
  <div class="course-box">
    <div class="course-box-list">
      <router-link v-if="props.isAdmin" to="/add-course" class="router-link">
        <a href="#" class="course-box-item add">
          <div class="course-box-item-add">
            <div class="center">
              <img src="@/assets/icons/button-icons/add.svg" alt="" />
              <p>Добавить курс</p>
            </div>
          </div>
        </a>
      </router-link>
      <router-link
        :to="`/course-page/${course.UniqueID}`"
        v-for="(course, index) in jsonData.Courses"
        v-show="course.isShow"
        class="router-link"
      >
        <a href="#" class="course-box-item">
          <div class="course-box-item-top">
            <div class="course-box-item-top-left">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM10.5303 9.28033L7.81066 12L10.5303 14.7197C10.8232 15.0126 10.8232 15.4874 10.5303 15.7803C10.2374 16.0732 9.76256 16.0732 9.46967 15.7803L6.21967 12.5303C5.92678 12.2374 5.92678 11.7626 6.21967 11.4697L9.46967 8.21967C9.76256 7.92678 10.2374 7.92678 10.5303 8.21967C10.8232 8.51256 10.8232 8.98744 10.5303 9.28033ZM14.5303 8.21967L17.7803 11.4697C18.0732 11.7626 18.0732 12.2374 17.7803 12.5303L14.5303 15.7803C14.2374 16.0732 13.7626 16.0732 13.4697 15.7803C13.1768 15.4874 13.1768 15.0126 13.4697 14.7197L16.1893 12L13.4697 9.28033C13.1768 8.98744 13.1768 8.51256 13.4697 8.21967C13.7626 7.92678 14.2374 7.92678 14.5303 8.21967Z"
                  fill="url(#paint0_linear_163_457)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_163_457"
                    x1="3"
                    y1="3"
                    x2="21"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2870DD" />
                    <stop offset="1" stop-color="#AA54B7" />
                  </linearGradient>
                </defs>
              </svg>
              {{ course.Category }}
            </div>
            <div class="course-box-item-top-right">
              {{ course.Сomplication }}
            </div>
          </div>
          <div
            class="course-box-item-img"
            :style="`background-image: url(${course.PicUrl});`"
          ></div>
          <div class="course-box-item-title">{{ course.Name }}</div>
          <div class="course-box-item-desc">
            <div class="course-box-item-desc-first">
              <div class="course-box-item-desc-item">
                <span>Цена</span>
                {{ course.Price + " " + course.Currency }}
              </div>
              <div class="course-box-item-desc-item">
                <span>Длительность</span>
                {{ course.Duration }}
              </div>
            </div>
            <div class="course-box-item-desc-item last">
              <span>Начало</span>
              {{ formatedDates[index] }}
            </div>
          </div>
        </a>
      </router-link>

      <div class="course-box-item soon">
        <div class="soon-box"></div>
        <div class="course-box-item-top">
          <div class="course-box-item-top-left"></div>
          <div class="course-box-item-top-right"></div>
        </div>
        <div class="course-box-item-img soon">Скоро</div>
        <div class="course-box-item-title">Solidity</div>
        <div class="course-box-item-desc"></div>
      </div>
      <div class="course-box-item soon">
        <div class="soon-box"></div>
        <div class="course-box-item-top">
          <div class="course-box-item-top-left"></div>
          <div class="course-box-item-top-right"></div>
        </div>
        <div class="course-box-item-img soon">Скоро</div>
        <div class="course-box-item-title">Building</div>
        <div class="course-box-item-desc"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-box-item-img.python {
  background-image: url(@/assets/imgs/python.png);
}

.course-box-item-img {
  background-image: url(@/assets/imgs/js.png);
}
.course-box-item-img {
  margin-top: 8px;
  width: 358px;
  height: 178px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.course-box-item-img.soon {
  background-image: none;
}
</style>
