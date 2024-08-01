<script setup>
import { computed } from "vue";
import "@/assets/styles.css";
const props = defineProps({
  title: String,
});
const titles = computed(() => {
  return props.title.split(" ");
});

const [spanTitle, primaryTitle] = titles.value;
</script>

<template>
  <p class="title">
    <span class="span-gradient">{{ spanTitle + " " }}</span>
    <span class="no-wrap">{{ primaryTitle }}</span>
  </p>
</template>

<style scoped>
.span-gradient {
  font-family: var(--inter-font);
  background: linear-gradient(179deg, #2870dd 0, #aa54b7 100%);
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.title {
  padding-top: 16px;
  font-family: var(--inter-font);
  font-weight: 600;

  color: #fff;
}

span {
  font-size: 72px;
  line-height: calc(1.3);
  font-weight: bold;
}

.no-wrap {
  white-space: nowrap;
  display: inline-block;
}
</style>
