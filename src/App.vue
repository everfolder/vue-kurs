<script setup>
import Header from '@/components/Header.vue'
import MainScreen from '@/components/pages/Main-screen.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="app">
    <div class="container">
      <Header />
      <main class="main-content">
    <!--    ДОБАВИТЬ РОУТЕР!!!!!!!!!!!!!!-->
        <MainScreen />
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
</style>
