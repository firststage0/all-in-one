<script setup>
import "@/assets/styles.css";
const props = defineProps(["duration", "startDate", "price"]);
</script>

<template>
  <div class="info">
    <div class="element">
      <p class="title">Длительность</p>

      <p class="value">
        {{ props.duration }}
      </p>
    </div>
    <img
      class="divider"
      src="@/assets/icons/projects-icon/divider.png"
      alt=""
    />
    <div class="element">
      <p class="title">Начало</p>
      <p class="value">
        {{ props.startDate }}
      </p>
    </div>
    <img
      class="divider"
      src="../assets/icons/projects-icon/divider.png"
      alt=""
    />
    <div class="element">
      <p class="title">Цена</p>

      <p class="value">{{ props.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 12px 24px;
  width: fit-content;
  gap: 24px;
  align-items: center;
}

.element {
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.divider {
  width: 1px;
  height: 47px;
}

.title {
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.48);
}

.value {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 20px;
}
</style>
