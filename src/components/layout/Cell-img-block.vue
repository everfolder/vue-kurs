<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  images: {
    type: Array,   // просто Array
    required: true
  }
})
</script>

<template>
  <div class="images-block">
    <img
        v-for="(img, i) in props.images"
        :key="i"
        :src="img"
        class="image"
    >
  </div>
</template>

<style lang="scss" scoped>
  img{
    width: 18.75rem;
  }
  .images-block{
    margin-top: 2.1875rem;
    width: 1298px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease;
  }

  @media (max-width: 1298px) {
    img{
      width: 250px;
    }
    .images-block{
      width: 1024px;
    }
  }

  @media (max-width: 1024px) {
    img{
      width: 200px;
    }
    .images-block{
      margin-top: 1.0625rem;
      width: 856px;
    }
  }

  @media (max-width: 856px) {
    img{
      width: 175px;
    }
    .images-block{
      width: 768px;
    }
  }

  @media (max-width: 768px) {
    .images-block{
      display: none;
    }
  }

  @media (max-width: 440px) {


  }
</style>