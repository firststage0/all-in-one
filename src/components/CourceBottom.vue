<script setup>
import "../assets/styles.css";
import BuyButton from "@/components/BuyButton.vue";

const props = defineProps(["socialsWhereBuy"]);
</script>

<template>
  <div class="wrapper">
    <BuyButton />

    <img
      class="divider"
      src="../assets\icons\projects-icon\divider.png"
      alt=""
    />
    <ul>
      <li v-for="social in props.socialsWhereBuy">
        <a :href="social.Link" target="_blank">
          <img src="@/assets/icons/telegram.svg" alt="" class="socialsIcon" />
          <p>{{ social.Name }}</p></a
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
  gap: 24px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
}

a {
  display: flex;
  align-items: center;
  gap: 10px;
}

a > img {
  transition: 300ms;
  filter: invert(80%);
}

a:hover > img {
  filter: invert(0);
}

p {
  color: #5b5b59;
}

img {
  filter: invert(50%);
}
</style>
