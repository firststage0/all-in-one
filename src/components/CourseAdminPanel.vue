<script setup>
const props = defineProps({
  isPaused: Boolean,
  isOnEdit: Boolean,
});
</script>

<template>
  <div class="wrapper">
    <button v-if="!props.isOnEdit" class="button">
      <img src="@/assets/icons/button-icons/edit.svg" alt="" />
      <p>Редактировать курс</p>
    </button>
    <button v-if="props.isPaused && !props.isOnEdit" class="button activate">
      <p>Активировать курс</p>
    </button>
    <div v-if="!props.isPaused && !props.isOnEdit" class="gradient">
      <button class="button pause">
        <img src="@/assets/icons/button-icons/pause.svg" alt="" />
        <p>Приостановить курс</p>
      </button>
    </div>

    <button v-if="props.isOnEdit" class="button activate">
      <p>Сохранить изменения</p>
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 8px;
}

.button {
  border: none;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.button > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.button.activate {
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 32px;
}

.gradient {
  width: fit-content;
  height: 100%;
  border-radius: 12px;
  padding: 1px 1px 2px 1px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.button.pause {
  display: flex;
  width: fit-content;
  padding: 11px 42px;
  background: #0c0c09;
}
</style>
