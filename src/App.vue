<script setup>
import Header from '@/components/Header.vue'
import MainScreen from '@/components/pages/Main-screen.vue'
import Footer from '@/components/Footer.vue'

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark-theme')
}
</script>

<template>
  <div class="app">
    <div class="container">
      <Header />
      <button class="btn-theme" @click="toggleTheme">Изменить тему</button>
      <main class="main-content">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
  html{
    padding-top: 1.25rem;
    margin: 0;
    box-sizing: border-box;
    align-items: center;
  }
  .container{
    max-width: 1920px;
    margin: 0 auto;
    padding: 0;
  }
  a {
    color: var(--main-gray-text);
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--main-gray-text-hover, #1f242b); // можно чуть темнее
      text-decoration: underline;
    }

    &:active {
      color: var(--main-gray-text-active, #161a20); // ещё темнее при клике
    }

    &:focus {
      outline: 2px solid var(--main-gray-text-focus, #5a5f69); // видимая подсветка
      outline-offset: 2px;
    }
  }

  .btn-theme{
    margin-top: -15px;
    height: 15px;
    width: 1298px;
    border: 0 1px 1px 1px solid var(--light-background);
    background-color: var(--dark-button);
    border-radius: 0 0 50px 50px;
    color: var(--light-color-for-theme);
  }
  @media (max-width: 1298px) {
    .btn-theme{
      width: 1024px;
    }
  }

  @media (max-width: 1024px) {
    .btn-theme{
      width: 856px;
    };
  }

  @media (max-width: 856px) {
    .btn-theme{
      width: 768px;
    };
  }

  @media (max-width: 768px) {
    .btn-theme{
      width: 420px;
    };
  }

  @media (max-width: 440px) {
    .btn-theme{
      width: 390px;
    };
  }
</style>
