<script setup>
const props = defineProps({
  editFuncition: Function,
  deleteFunction: Function,
});
</script>

<template>
  <div class="wrapper">
    <button @click.stop="props.editFuncition" class="button">
      <img src="@/assets/icons/button-icons/edit2.svg" alt="" /></button
    ><button @click.stop="props.deleteFunction" class="button">
      <img src="@/assets/icons/button-icons/delete.svg" alt="" />
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 4px;
}

.button {
  position: relative;

  cursor: pointer;
  border: none;
  background-color: inherit;
}
</style>
