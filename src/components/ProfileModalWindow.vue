<script setup>
import "@/assets/styles.css";
import { toogleWindowStatus } from "@/functions/modalWindowsStatus";
</script>

<template>
  <div class="content" @click.self="toogleWindowStatus('profile')">
    <div class="wrapper-profile">
      <header class="profile-modal-header">
        <div class="header-block">
          <ul class="header-list">
            <li class="header-item">
              <p class="header-title">Profile</p>
            </li>
            <li class="header-item">
              <button
                class="close-button"
                @click.stop="toogleWindowStatus('profile')"
              >
                <img
                  class="close-img"
                  src="@/assets/icons/close-icon.svg"
                  alt=""
                />
              </button>
            </li>
          </ul>
          <div class="header-divider"></div>
        </div>
      </header>
      <main class="profile-window-main-content">
        <img
          class="profile-window-image"
          src="@/assets/icons/profile-image.svg"
          alt=""
        />
        <div class="profile-main-content">
          <div class="profile-token-block">
            <p class="profile-token">0x831...B49F</p>
            <button class="copy-token">
              <img
                src="@/assets/icons/copy-image.svg"
                alt=""
                class="copy-token-img"
              />
            </button>
          </div>
          <div class="exit-block">
            <img src="@/assets/icons/exit-icon.svg" alt="" class="exit-img" />
            <button class="exit-button">
              <p class="exit-button-text">Disconect</p>
            </button>
          </div>
        </div>
      </main>
      <div class="main-divider"></div>
      <footer class="profile-window-footer">
        <p class="profile-window-footer-text">Need help? Contact us:</p>
        <a href="#" class="profile-footer-help-link">
          <img
            class="profile-footer-help-img"
            src="@/assets/icons/telegram-colored.svg"
            alt=""
          />
          <p class="profile-footer-help-text">aio_pro</p>
        </a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100dvh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}

.wrapper-profile {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: fit-content;
  height: fit-content;
  background-color: #232427;
  opacity: 1;
}

.header-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 24px;
  list-style-type: none;
}

.header-title {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.close-button {
  background-color: inherit;
  border: none;
}

.close-img {
  width: 12px;
  height: 12px;
}

.header-divider {
  width: 100%;
  height: 1px;
  background-color: #2c2d2f;
}

.profile-window-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 16px;
  gap: 8px;
}

.profile-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-window-image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.profile-token-block {
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  gap: 8px;
}

.profile-token {
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 24px;
}

.copy-token {
  width: 100%;
  height: 100%;
  background-color: inherit;
  border: none;
  padding: 6px;
}

.copy-token-img {
  width: 20px;
  height: 20px;
}

.exit-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: fit-content;
  width: fit-content;
  padding: 3.5px 0 3.5px 3.5px;
}

.exit-img {
  width: 18px;
  height: 17px;
}

.exit-button {
  background-color: inherit;
  border: none;
  padding: 0;
}

.exit-button-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-skip-ink: none;
  color: #2870dd;
}

.main-divider {
  align-self: center;
  width: 85%;
  height: 1px;

  background-color: #2c2d2f;
}

.profile-window-footer {
  display: flex;
  align-items: center;
  padding: 16px 38px;
  gap: 4px;
}

.profile-window-footer-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #ffffff52;
}

.profile-footer-help-link {
  display: flex;
  align-items: center;
  padding: 4px 7px;
  gap: 2px;
  width: fit-content;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid #28a8e9;
}

.profile-footer-help-img {
  width: 20px;
  height: 20px;
}

.profile-footer-help-text {
  font-family: var(--inter-font);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #28a8e9;
}
</style>
