import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { PerfectScrollbarPlugin } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "Главная",
        breadcrumb: "Главная",
      },
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("@/views/FAQ.vue"),
      meta: {
        title: "FAQ",
        breadcrumb: "FAQ",
      },
    },
    {
      path: "/referral",
      name: "Referral",
      component: () => import("@/views/ReferralPage.vue"),
      meta: {
        title: "Реферальная программа",
        breadcrumb: "Реферальная программа",
      },
    },
    {
      path: "/active-referral",
      name: "Active Referral",
      component: () => import("@/views/ActiveReferralPage.vue"),
      meta: {
        title: "Реферальная программа",
        breadcrumb: "Реферальная программа",
      },
    },
    {
      path: "/course-page/:id",
      name: "course-page",
      component: () => import("@/views/CoursePage.vue"),
      meta: {
        title: "Страница курса",
        breadcrumb: "Страница курса",
      },
    },
    {
      path: "/education",
      name: "education",
      component: () => import("@/views/Education.vue"),
      meta: {
        title: "Моё обучение",
        breadcrumb: "Моё обучение",
      },
    },
    {
      path: "/lesson/:id",
      name: "Lesson",
      component: () => import("@/views/LessonPage.vue"),
    },
    {
      path: "/homework/:id",
      name: "Homework",
      component: () => import("@/views/HomeworkPage.vue"),
    },
    {
      path: "/add-course",
      name: "add cource",
      component: () => import("@/views/AddCourse.vue"),
    },
  ],
});

const app = createApp(App);

app.use(router, PerfectScrollbarPlugin).mount("#app");
