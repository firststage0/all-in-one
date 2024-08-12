<script setup>
const props = defineProps({
  isSended: Boolean,
  isFiles: Boolean,
  ifTime: Boolean,
  isAdmin: Boolean,
});
</script>

<template>
  <div class="input-group">
    <div v-if="props.isFiles" class="files-block">
      <div class="file">
        <img src="@/assets/icons/button-icons/pdf.svg" alt="" />
        <div class="file-info">
          <p class="file-name">my-cv.pdf</p>
          <p class="file-size">20 KB</p>
        </div>
        <button class="delete-file">
          <img src="@/assets/icons/button-icons/trash.svg" alt="" />
        </button>
      </div>

      <div class="file">
        <img src="@/assets/icons/button-icons/pdf.svg" alt="" />
        <div class="file-info">
          <p class="file-name">my-cvvvvvvvv.pdf</p>
          <p class="file-size">20 KB</p>
        </div>
        <button class="delete-file">
          <img src="@/assets/icons/button-icons/trash.svg" alt="" />
        </button>
      </div>
    </div>
    <p v-if="props.ifTime" class="time">Вт, 13 окт., 22:01 MSK (UTC+3)</p>
    <div
      :class="`textarea ${props.isFiles ? 'with-files' : ''}`"
      contenteditable="true"
      placeholder="Ваш ответ"
    >
      <b>Задание от преподавателя</b> <br />

      Задание от преподавателя
    </div>
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
        <p>{{ props.isAdmin ? "Сохранить" : "Отправить" }}</p>
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
  min-height: 140px;
  position: relative;
  background: #1c1c1b;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.files-block {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
}

.file {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 16px 16px 14px;
  background: #1f2022;
}

.file-info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
}

.file-name {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  letter-spacing: -0.01em;
}

.file-size {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  color: rgba(255, 255, 255, 0.32);
}

.delete-file {
  border: none;
  background-color: inherit;
  display: flex;
  width: fit-content;
  align-self: flex-start;
}

.time {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.32);
}

.textarea {
  width: 74%;
  min-height: 100px;
  border: none;
  outline: none;
  background: inherit;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  line-height: 2;
}

.textarea.with-files {
  min-height: fit-content;
}

.textarea:empty:before {
  content: attr(placeholder);
  color: rgba(255, 255, 255, 0.32);
}

.input-button-group {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 10px;
  bottom: 10px;
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
