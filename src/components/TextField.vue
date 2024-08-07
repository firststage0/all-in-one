<script setup>
const props = defineProps({
  isSended: Boolean,
});
</script>

<template>
  <div class="input-group">
    <textarea
      class="textarea"
      name="homework-answer"
      placeholder="Ваш ответ"
    ></textarea>
    <div class="input-button-group">
      <button v-if="!props.isSended" class="add-file-button">
        <img
          src="@/assets/icons/button-icons/paperclip.svg"
          alt=""
          class="add-file"
        />
        <p>Прикрепить файл</p>
      </button>
      <button v-if="!props.isSended" class="send-button">
        <p>Отправить</p>
      </button>
      <button v-if="props.isSended" class="change-button">
        <img src="@/assets/icons/button-icons/change.svg" alt="" />
        <p>Изменить</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  width: 100%;
  position: relative;
}

.textarea {
  width: 100%;
  height: 120px;
  border: none;
  border-radius: 16px;
  resize: none;
  padding: 16px;
  background: #1f2022;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: #fff;
}

.input-button-group {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.homework-answer::placeholder {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.32);
}

.input-button-group > button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 8px;
  border-radius: 12px;
}

.input-button-group > button > p {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.add-file-button {
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
}

.send-button {
  padding: 12px 32px;
  background: linear-gradient(135deg, #2870dd 0%, #aa54b7 100%);
}

.change-button {
  background: rgba(255, 255, 255, 0.04);
  padding: 12px;
}
</style>
