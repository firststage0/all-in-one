import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Cource Page",
      component: () => import("@/views/CourcePage.vue"),
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
      path: "/lessons-list",
      name: "Lessons list",
      component: () => import("@/views/LessonsList.vue"),
      meta: {
        title: "Список уроков",
        breadcrumb: "Список уроков",
      },
    },
    {
      path: "/education",
      name: "Education",
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
  ],
});

const app = createApp(App);

app.use(router).mount("#app");
