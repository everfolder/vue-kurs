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
      <button @click="toggleTheme">Toggle Theme</button>
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
</style>
