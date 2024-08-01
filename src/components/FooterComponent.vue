<script setup>
import BuyButton from "@/components/BuyButton.vue";
import CourceInfo from "@/components/CourceInfo.vue";
import CourceTitle from "@/components/CourceTitle.vue";
const props = defineProps(["title", "duration", "startDate", "price"]);
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <CourceTitle :title="props.title" />
      </div>
      <div class="bottom">
        <CourceInfo
          style="background-color: #ffffff00; padding: 0"
          :duration="props?.duration"
          :startDate="props?.startDate"
          :price="props?.price"
        />
        <BuyButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 42px;
  margin-bottom: 64px;
}

.wrapper {
  background: #ffffff0a;
  border-radius: 32px;
  padding: 32px;
  height: fit-content;
}

.wrapper {
  background-image: url(../assets/images/bottom-background-image.png);
  background-repeat: no-repeat;
  background-position: 103% 0;
  background-size: 520px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 32px;
}
</style>
