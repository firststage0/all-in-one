<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CourceCard from "@/components/CourceCard.vue";
import SlideNavBar from "@/components/SlideNavBar.vue";
import homeworks from "@/data/homeworks.json";
import GoBackButton from "@/components/GoBackButton.vue";
import Homework from "@/components/Homework.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const $route = useRoute();

const buttonId = ref(null || 1);

onMounted(() => {
  buttonId.value = Number($route.query.buttonId || 1);
});
</script>

<template>
  <HeaderComponent />
  <div class="homework-page">
    <div class="homework-page-wrapper">
      <CourceCard />
      <SlideNavBar v-model="buttonId" />
      <router-link to="/education" class="router-link"
        ><GoBackButton />
      </router-link>
      <Homework :data="homeworks[$route.params.id - 1]" :isAdmin="true" />
    </div>
  </div>
</template>

<style scoped>
.homework-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.homework-page-wrapper {
  margin-top: calc(var(--header-height) + 16px);
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1440px;
}
</style>
