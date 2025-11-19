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
      <main class="main-content">
        <router-view />
      </main>
<!--      <button @click="toggleTheme">Toggle Theme</button>-->
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
</style>
