<script setup>
import { toogleWindowStatus } from "../functions/modalWindowsStatus";
</script>

<template>
  <div
    class="refferal-modal-container"
    @click.self="toogleWindowStatus('activeRefferal')"
  >
    <div class="refferal-modal-wrapper">
      <p class="title">Refferal</p>
      <div class="refferal-modal-card">
        <main class="refferal-main-content">
          <p class="card-title">How it works</p>
          <p class="main-description">
            Share with your friends to earn a percentage of their buying
            courses. <br />
            You will earn 30 % of their buying courses.
          </p>
        </main>

        <div class="divider"></div>

        <footer class="refferal-footer-content">
          <p class="refferal-link">Link</p>
          <p class="refferal-link-description">
            Connect wallet to get your referral link
          </p>
          <button class="connect-wallet-button">
            <p class="connect-wallet-text">Connect Wallet</p>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.refferal-modal-container {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0c0c09;
  display: flex;
  justify-content: center;
  align-items: center;
}

.refferal-modal-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: fit-content;
  height: fit-content;
}

.title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 16px;
}

.refferal-modal-card {
  background-color: #1f2022;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 16px;

  padding: 24px;
  gap: 16px;
}

.refferal-main-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 20px;
}

.main-description {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: #b9b9b9;
  line-height: 2.5;
}

.divider {
  width: 100%;
  height: 2px;
  stroke-width: 1px;
  background-color: #ffffff0a;
}

.refferal-link {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}

.refferal-link-description {
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: #b9b9b9;
}

.connect-wallet-button {
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  background: linear-gradient(225deg, #2660e8 0%, #093bac 100%);
  border-radius: 12px;
  padding: 14px 16px;
  width: 470px;
  height: 48px;
  border: none;
}

.connect-wallet-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 16px;
}
</style>
