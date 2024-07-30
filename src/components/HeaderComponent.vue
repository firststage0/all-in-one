<script setup>
import "../assets/styles.css";
// const toogleTheme = () => {
//   console.log(window.matchMedia("(prefers-color-scheme: dark)"));
// };
</script>

<template>
  <header>
    <div class="container">
      <div class="title">
        <h1 class="primary-title">All-IN-ONE</h1>
        <h2 class="secondary-title">Study</h2>
      </div>
      <nav class="nav-bar">
        <ul>
          <li class="item">
            <button class="referral">
              Referal
              <img
                class="referral-image"
                src="../assets/icons/referral.svg"
                alt="percent-image"
              />
            </button>
          </li>
          <li class="item">
            <button>
              <img
                class="profile-image"
                src="../assets/icons/profile-image.png"
                alt="profile-image"
              />
              0x831B49F
              <img
                src="../assets/icons/copy-image.svg"
                alt=""
                class="copy-image"
              />
            </button>
          </li>
          <li class="item">
            <button>
              <div class="toogle-theme-field">
                <div class="toogle-theme">
                  <img
                    class="toogle-theme-circle"
                    src="../assets/icons/switch-el-night.svg"
                    alt=""
                  />
                  <img
                    class="toogle-theme-icon"
                    src="../assets/icons/theme-icon.svg"
                    alt=""
                  />
                </div>
              </div>
            </button>
          </li>
          <li class="item">
            <button>
              <img
                src="../assets/icons/chat-icon.svg"
                alt=""
                class="chat-img"
              />
            </button>
          </li>
          <li class="item">
            <button style="gap: 10px">
              <img
                class="question-mark-img"
                src="../assets/icons/question-mark.svg"
                alt=""
              />
              FAQ
            </button>
          </li>
          <li class="item">
            <button style="gap: 4px">
              <img src="../assets/icons/flag-russia.png" alt="" class="flag" />
              RU
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #0f0f0c;
  width: 100%;
  color: #ffff;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.primary-title {
  font-weight: 700;
  font-size: 19px;
  font-family: var(--kinetica-font);
}

.secondary-title {
  font-weight: 300;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.32);
  font-family: var(--kinetica-font);
}

ul {
  display: flex;
  list-style-type: none;
  margin-right: 16px;
  gap: 8px;
}

button {
  /* color: #ffff; */
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #0f0f0c;
  height: 48px;
  width: fit-content;
  border: 1px solid #ffffff29;
  border-radius: 14px;
  padding: 10px 12px;
}

.referral {
  background: linear-gradient(225deg, #bdff00 0%, #edff7b 100%);
  color: #000000;
  padding: 14px 20px;
}

.toogle-theme-field {
  display: flex;
  align-items: center;
  border-radius: 360px;
  width: 55px;
  height: 28px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.15);
  background: #2a2b2e;
}

.toogle-theme {
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  margin-left: auto;
  margin-right: 2px;
  align-items: center;
  justify-content: center;
}
.toogle-theme img {
  position: absolute;
}
</style>
