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
      component: () => import("./views/CourcePage.vue"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("./views/FAQ.vue"),
    },
    {
      path: "/referral",
      name: "Referral",
      component: () => import("./views/ReferralPage.vue"),
    },
    {
      path: "/active-referral",
      name: "Active Referral",
      component: () => import("./views/ActiveReferralPage.vue"),
    },
  ],
});

const app = createApp(App);

app.use(router).mount("#app");
