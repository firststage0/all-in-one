<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />

  <div class="refferal-window-container">
    <div class="wrapper">
      <p class="label">Refferal</p>
      <div class="cards-wrapper">
        <div class="card main">
          <p class="main-card-title">How it works</p>
          <p class="main-card-description">
            Share with your friends to earn a percentage of their buying
            courses.
            <br />
            You will earn 30 % of their buying courses.
          </p>
          <div class="divider"></div>
          <p class="link-title">Link</p>
          <div class="link-field">
            <p class="link">https://aio.io?r=3onomnaihdgx</p>
            <button class="copy-button">
              <img
                src="@/assets/icons/copy-image.svg"
                alt=""
                class="coppy-img"
              />
            </button>
          </div>
        </div>
        <div class="card rewards">
          <p class="rewards-title">Your rewards</p>
          <p class="rewards-count"><span class="count">300</span> USDT</p>
          <div class="rewards-card-bottom">
            <button class="claim-button">
              <p class="claim-text">Claim</p>
            </button>
            <p class="claimed-rewards">Claimed 200/600 USDT</p>
          </div>
        </div>
        <div class="card refferals">
          <header class="refferals-card-header">
            <p class="title">Your refferals</p>
          </header>
          <div class="table-titles">
            <p class="date">Date</p>
            <p class="address">Address</p>
            <p class="learning">Learning</p>
          </div>
          <ul class="refferals-list">
            <li class="refferals-item" v-for="i in 9">
              <p class="item-date">10.03.2024</p>
              <p class="item-address">0x831...B49F</p>
              <p class="item-learning">Web3 Python-разработчик</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.refferal-window-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 780px;
  gap: 16px;
}

.label {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.cards-wrapper {
  display: grid;
  width: 780px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 225px 240px;
  gap: 16px;
}

.card {
  border-radius: 16px;
  padding: 24px;
  background: #1f2022;
}

.main-card-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 20px;
}

.main-card-description {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: #b9b9b9;
  line-height: 2.5;
}

.divider {
  height: 2px;
  width: 97%;
  background-color: #ffffff0a;
  margin-top: 8px;
}

.link-title {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  margin-top: 5px;
}

.link-field {
  margin-top: 4px;
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 14.5px 16px;
  background-color: #1b1c1e;
  border-radius: 12px;
}

.link {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}

.copy-button {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
}

.card.rewards {
  background: linear-gradient(225deg, #2660e8 25%, #093bac 100%);
}

.rewards-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.count {
  font-family: var(--inter-font);
  font-weight: bold;
  font-size: 36px;
}

.rewards-count {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.rewards-card-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.claim-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding: 14px 16px;
  width: 205px;
  height: 47px;
  background: linear-gradient(225deg, #fafbff 0%, #f9f9f9 100%);
  border: none;
  margin-top: 16px;
}

.claim-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
  color: #245ee4;
}

.claimed-rewards {
  margin-top: 4px;
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 14px;
  color: #ffffffa3;
}

.card.refferals {
  grid-column: span 2;
  height: 240px;
  padding: 0;
}

.refferals-card-header {
  padding: 17px 24px;
}

.refferals-card-header > .title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.table-titles,
.refferals-item {
  width: 100%;
  display: grid;
  grid-template-columns: 150px 200px 365px;
  padding: 9px 12px;
  gap: 16px;
}

.table-titles {
  height: fit-content;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  background-color: #2d2e32;
}

.table-titles > p {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.36);
}

.refferals-list {
  height: 50%;
  overflow-y: scroll;
  padding: 0;
  list-style-type: none;
}

.refferals-item > p {
  display: flex;
  justify-content: center;
}

.refferals-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
</style>
