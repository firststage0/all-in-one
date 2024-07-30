<script setup>
import { defineProps } from "vue";
import "../assets/styles.css";
const props = defineProps(["title"]);
const title = props.title.split(" ");
</script>

<template>
  <p class="title">
    <span class="span-gradient">{{ title[0] + " " }}</span>
    <span class="no-wrap">{{ title[1] }}</span>
  </p>
</template>

<style scoped>
.span-gradient {
  font-weight: 600;
  background: linear-gradient(135deg, #2870dd 20%, #aa54b7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  padding-top: 16px;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 72px;
  color: #fff;
}

.no-wrap {
  white-space: nowrap;
  display: inline-block;
}
</style>
