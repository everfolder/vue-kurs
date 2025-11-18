<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app">
    <div class="container">
      <Header />
      <main class="main-content">
    <!--    ДОБАВИТЬ!!!!!!!!!!!!!!-->
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
  html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    align-items: center;
  }
  .container{
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
