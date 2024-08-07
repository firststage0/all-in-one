<script setup>
const props = defineProps({ maxPage: Number });
const currentPage = defineModel();
const minPage = 1;

const changePage = (value) => {
  if (value === "next" && currentPage.value < props.maxPage) {
    currentPage.value++;
  }
  if (value === "prev" && currentPage.value > minPage) {
    currentPage.value--;
  }
};
</script>

<template>
  <div class="nav-block">
    <button
      :class="`button ${currentPage === minPage ? 'inactive' : ''}`"
      @click="changePage('prev')"
    >
      <img
        src="@/assets/icons/button-icons/go-to-arrow.svg"
        alt=""
        class="button-image"
      />
      <p class="text">К предыдущему</p>
    </button>
    <button
      :class="`button ${currentPage === maxPage ? 'inactive' : ''}`"
      @click="changePage('next')"
    >
      <p class="text">К следующему</p>
      <img
        src="@/assets/icons/button-icons/go-to-arrow.svg"
        alt=""
        class="button-image"
      />
    </button>
  </div>
</template>

<style scoped>
.nav-block {
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 10px;
}

.button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.04);
}

.button.inactive {
  pointer-events: none;
  background: rgba(255, 255, 255, 0.04);
  opacity: 0.32;
}

.text {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.button-image:first-child {
  rotate: 180deg;
}
</style>
