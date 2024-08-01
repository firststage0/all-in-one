<script setup>
import "../assets/styles.css";
import BuyButton from "@/components/BuyButton.vue";

const props = defineProps(["socialsWhereBuy"]);
</script>

<template>
  <div class="wrapper">
    <BuyButton />

    <!-- TODO: Сделать отображение соцсетей через массив v-for с данными из пропсов -->

    <img
      class="divider"
      src="../assets\icons\projects-icon\divider.png"
      alt=""
    />
    <ul>
      <li v-for="social in props.socialsWhereBuy">
        <a :href="social.Link" target="_blank"
          ><p>{{ social.Name }}</p></a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;

  gap: 24px;
}

.wrapper > * {
  display: flex;
  align-items: center;
  gap: 11px;
}

a {
  text-decoration: none;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
}

ul {
  list-style-type: none;
}

p {
  color: #5b5b59;
}

img {
  filter: invert(50%);
}
</style>
